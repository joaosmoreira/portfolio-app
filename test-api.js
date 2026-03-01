import yf from 'yahoo-finance2';
async function run() {
  try {
    const res = await yf.historical('BTC-USD', { period1: '2023-01-01', interval: '1wk' });
    console.log("Success! Points:", res.length);
  } catch (e) {
    console.error("Failed:", e);
  }
}
run();
