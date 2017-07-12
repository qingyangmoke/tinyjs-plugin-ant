const full = require('./config/webpack.full.config');
const p2 = require('./config/webpack.p2.config');
const ant = require('./config/webpack.ant.config');
module.exports = [full[0], full[1], p2[0], p2[1], ant[0], ant[1]];
