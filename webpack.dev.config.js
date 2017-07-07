const config = require('./config/webpack.base.config');
const p2 = require('./config/webpack.p2.config');
module.exports = [config, p2[1]];
