const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
    entry: {
        index:'./src/index.js'
    },               // 入口文件(來源)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },              // 出口文件(輸出)
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,  
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                //'style-loader', 會跟原本的衝突 
                'css-loader',
                'sass-loader'
            ],
        }]
    },              // 處裡對應模組
    plugins: [
        new MiniCssExtractPlugin({ //產出CSS
            filename: "./css/[name].css"
        }),
        new HtmlWebpackPlugin({ //產出html檔
            chunks : ['index'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/index.html',
            //來源
            filename : 'index.html'
            // 目的地
        })
    ],             // 對應的插件
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3000,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },           // 服務器配置
    mode: 'development'      // 開發模式配置 上線用 "production"
}