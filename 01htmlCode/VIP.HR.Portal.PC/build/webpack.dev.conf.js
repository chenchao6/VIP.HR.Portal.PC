var utils = require('./utils')
var fs = require('fs')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')  // 一个可以合并数组和对象的插件
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')  // 一个用于生成HTML文件并自动注入依赖文件（link/script）的webpack插件
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')   // 用于更友好地输出webpack的警告、错误等信息
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})


module.exports = merge(baseWebpackConfig, {  // 配置样式文件的处理规则，使用styleLoaders
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, extract: true })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: utils.assetsPath('[name].css')
        }),
        new HtmlWebpackPlugin({
            filename: 'vip_staff.html',
            template: 'src/view/vip_staff/vip_staff.html',
            chunks: ['vip_staff'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'vip_admin.html',
            template: 'src/view/vip_admin/vip_admin.html',
            chunks: ['vip_admin'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'vip_search.html',
            template: 'src/view/vip_search/vip_search.html',
            chunks: ['vip_search'],
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
})
