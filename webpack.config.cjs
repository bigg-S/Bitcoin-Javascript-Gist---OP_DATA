const path = require('path');

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
    extensions: ['.js'],
  },
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
    contentBase: './dist',
    open: true,
  },
  // Avoid 'eval' in source-map for better debugging
  devtool: 'source-map',
};