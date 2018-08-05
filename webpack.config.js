// var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('./node_modules')
  .filter(x => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(mod => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  target: 'node',
  externals: nodeModules
};
