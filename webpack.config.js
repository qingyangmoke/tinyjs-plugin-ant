const prod = require('./config/webpack.ant.prod.config');
const dev = require('./config/webpack.ant.dev.config');
module.exports = [dev, prod];
