const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
mode: 'production',
  entry: './src/index.js', // Your entry point
  output: {
    filename: 'index.js', // Output bundle name
    path: __dirname + '/dist', // Output directory
  },
  module: {
    rules: [
      // Your Babel loader configuration
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Your Babel options here
          },
        },
      },
      {
        test    : /\.(scss|css)$/,
        use     : [ 'css-loader']
      },
      // Additional loaders for other file types (e.g., CSS)
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/commentStyles.css', to: 'commentStyles.css' }, // Adjust source and destination paths accordingly
      ],
    }),
  ],
};
