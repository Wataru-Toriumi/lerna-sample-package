
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
