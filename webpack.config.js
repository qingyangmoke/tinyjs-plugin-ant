const full = require('./config/webpack.full.config');
const p2 = require('./config/webpack.p2.config');
const ant = require('./config/webpack.ant.config');
module.exports = [...full, ...p2, ...ant];
