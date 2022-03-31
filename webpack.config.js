const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
   entry: {
      app: './src/index.js',
   },

   output: {
      path: path.join(__dirname, '/app'),
      publicPath: '/',
      filename: 'app.js',
   },
   devServer: {
      static: {
         directory: path.join(__dirname, './dist'),
      },
      compress: true,
      historyApiFallback: true,
      https: false,
      open: true,
      hot: true,
      port: 9002,
      devMiddleware: {
         writeToDisk: true,
      },
   },

   module: {
      rules: [
         {
            test: /\.html$/,
            use: [
               {
                  loader: 'html-loader',
               },
            ],
         },
         {
            test: /\.css$/,
            include: /node_modules/,
            loader: 'css-loader',
         },
         {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader,
             'css-loader',
             'postcss-loader',
             'sass-loader'],
         },
         {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            exclude: /images/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name],[ext]',
                     outputpath: 'assets/fonts',
                  },
               },
            ],
         },
      ],
   },
   plugins: [
      new CleanWebpackPlugin(),
      new OptimizeCssAssetsPlugin({}),
      new MiniCssExtractPlugin({
         filename: 'assets/css/style.css',
      }),

      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: './src/index.html',
      }),
   ],
};
