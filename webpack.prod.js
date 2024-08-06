const path = require('path');
const config = require('./webpack.config')
const { merge } = require('webpack-merge');

module.exports = merge (config, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
});
