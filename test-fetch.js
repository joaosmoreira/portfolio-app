async function fetchBinance(symbol) {
    let binanceSymbol = symbol.replace('-', '');
    if (binanceSymbol.endsWith('USD')) binanceSymbol += 'T';
    const res = await fetch(`https://api.binance.com/api/v3/klines?symbol=${binanceSymbol}&interval=1d&limit=50`);
    if (!res.ok) throw new Error("Binance API error");
    const data = await res.json();
    return data.slice(-1)[0][4]; // latest close
}

async function fetchYahoo(symbol) {
    const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=3mo&interval=1d`);
    if (!res.ok) throw new Error("Yahoo API error: " + res.status);
    const data = await res.json();
    const result = data.chart.result[0];
    const closes = result.indicators.quote[0].close;
    return closes[closes.length - 1];
}

Promise.all([
  fetchBinance('BTC-USD'),
  fetchYahoo('AAPL'),
  fetchYahoo('EURUSD=X')
]).then(console.log).catch(console.error);
