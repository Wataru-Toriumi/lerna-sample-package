
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /mode_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', 'jsx'],
  },
};
