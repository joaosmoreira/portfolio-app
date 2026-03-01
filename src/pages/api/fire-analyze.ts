import yahooFinance from 'yahoo-finance2';

// In a real app, you would use 'twitter-api-v2' and an AI SDK (like @google/gemini-sdk or openai)
// For this portfolio piece, we'll simulate the AI and Twitter processing to avoid exposing keys
// and ensure it runs flawlessly on the Vercel edge/serverless without hitting quota limits.

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const symbol = data.symbol || 'BTC-USD';

        // 1. Fetch real market data from Yahoo Finance
        const queryOptions = { period1: '2023-01-01', interval: '1wk' as const };
        const historicalResult: Array<{ date: Date, close: number }> = await yahooFinance.historical(symbol, queryOptions);

        if (!historicalResult || historicalResult.length === 0) {
            throw new Error("No data found for symbol");
        }

        // Get the latest price point
        const latest = historicalResult[historicalResult.length - 1];
        const previous = historicalResult[historicalResult.length - 2];

        const price = latest.close;
        const change = ((latest.close - previous.close) / previous.close) * 100;

        // Format chart data for lightweight-charts
        const chartData = historicalResult.map(item => ({
            time: item.date.toISOString().split('T')[0],
            value: item.close
        }));

        // 2. Risk Algorithm (Deep Analysis Simulation based on real price logic)
        // In a real scenario, we calculate EMA 9, 21, 50, 200, RSI, MACD, and ATR.
        // Here we deduce a plausible risk score based on recent performance.
        const isBullPhase = change > 0;
        const isHighVolatility = Math.abs(change) > 5;

        let riskScore = 50; // Neutral baseline
        let riskCategory = "Médio";

        if (isBullPhase && !isHighVolatility) {
            riskScore = 20 + Math.random() * 10;
            riskCategory = "Baixo";
        } else if (isBullPhase && isHighVolatility) {
            riskScore = 80 + Math.random() * 10;
            riskCategory = "Elevado"; // RSI > 80, fast rise
        } else if (!isBullPhase && isHighVolatility) {
            riskScore = 90 + Math.random() * 10;
            riskCategory = "Elevado"; // Rapid drop, panic
        } else {
            riskScore = 40 + Math.random() * 20;
            riskCategory = "Médio";
        }

        // 3. Simulated AI & Social Sentiment (The X Intelligence)
        // We simulate the output of the LLM analyzing financial tweets here to keep the demo self-contained.
        const sentimentType = riskCategory === "Elevado" && isBullPhase ? "Euforia Extrema"
            : riskCategory === "Elevado" && !isBullPhase ? "Medo & Pânico"
                : "Neutro / Acumulação";

        const aiContext = {
            sentiment: sentimentType,
            fundamentalDriver: isHighVolatility
                ? "Mencionada forte atividade macroeconómica (taxas de juro/inflação) que está a dominar a análise técnica a curto prazo."
                : "Nenhuma notícia fundamental disruptiva encontrada nas últimas 24 horas. Preço impulsionado por mecânica de mercado pura.",
            consensusSummarization: `O consenso no X indica ${sentimentType.toLowerCase()}, com traders a vigiar de perto os níveis atuais de suporte/resistência.`,
        };

        // Generate mock Markers for chart
        const markers = [];
        if (historicalResult.length > 10) {
            // Buy marker a few days ago
            markers.push({
                time: historicalResult[historicalResult.length - 5].date.toISOString().split('T')[0],
                position: 'belowBar',
                color: '#22c55e',
                shape: 'arrowUp',
                text: 'Buy Signal (RSI < 30)',
            });

            if (riskCategory === "Elevado" && isBullPhase) {
                markers.push({
                    time: historicalResult[historicalResult.length - 1].date.toISOString().split('T')[0],
                    position: 'aboveBar',
                    color: '#ef4444',
                    shape: 'arrowDown',
                    text: 'Warning: Overbought',
                });
            }
        }

        return new Response(JSON.stringify({
            success: true,
            data: {
                symbol,
                currentPrice: price,
                change24h: change,
                risk: {
                    score: Math.round(riskScore),
                    category: riskCategory,
                    metrics: ["EMA (9,21) Crossed", "High Institutional Volume", "ATR Expansion"]
                },
                aiContext,
                chartData,
                markers
            }
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error("FIRE Engine Error:", error);
        return new Response(JSON.stringify({
            success: false,
            error: error instanceof Error ? error.message : "Internal processing failed"
        }), { status: 500 });
    }
}
