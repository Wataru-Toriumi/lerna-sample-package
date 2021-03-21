
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    library: '@wataru-toriumi/drawer',
    libraryTarget: 'umd',
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
