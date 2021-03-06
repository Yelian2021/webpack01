const path = require('path');

module.exports = {
    entry: './src/index.js',               // 入口文件(來源)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },              // 出口文件(輸出)
    //module: {},              // 處裡對應模組
    //plugins: [],             // 對應的插件
    //devServer: {},           // 服務器配置
    mode: 'development'      // 開發模式配置 上線用 "production"
}