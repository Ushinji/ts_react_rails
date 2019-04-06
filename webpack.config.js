/* eslint-disable */
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: '[name]-[hash].js',
    publicPath:
      process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3010/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.*(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [new ManifestPlugin()],
  devServer: {
    contentBase: '../public/dist',
    port: 3010,
    disableHostCheck: true,
    host: '0.0.0.0',
  },
};
