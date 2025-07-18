import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Required for __dirname in ESM

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/icons/favicon.ico',
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
    hot: true,
    watchFiles: ['src/**/*'],
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js'],
  },
};
