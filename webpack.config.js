const config = require('./config/webpack.base.config');
const minConfig = require('./config/webpack.prod.config');
const p2 = require('./config/webpack.p2.config');
const ant = require('./config/webpack.ant.config');
module.exports = [config, minConfig, ...p2, ...ant];
