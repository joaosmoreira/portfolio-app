const yf = require('yahoo-finance2').default;
yf.quote('AAPL').then(console.log).catch(console.error);
