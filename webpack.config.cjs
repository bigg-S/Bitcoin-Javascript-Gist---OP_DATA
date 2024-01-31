
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './modules/main.js', // Correct the entry path
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    topLevelAwait: true, // Enable top-level `await` support
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // babel for js transpilation
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    liveReload: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, '.'), // Adjust the path based on your project structure
    },
    compress: true, // Enable gzip compression for everything served
    hot: true, // Enable hot module replacement (HMR)
  },
  // Avoid 'eval' in source-map for better debugging
  devtool: 'source-map',
};