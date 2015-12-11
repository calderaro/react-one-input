var devConfig = require('./dev-webpack.config');
var buildConfig = require('./build-webpack-config');

const TARGET = process.env.TARGET;

if (TARGET === 'build') {
  module.exports = buildConfig;
} else {
  module.exports = devConfig;
}