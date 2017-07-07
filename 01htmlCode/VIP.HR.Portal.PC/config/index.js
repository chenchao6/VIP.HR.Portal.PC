var path = require('path')
module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env:require('./dev.env'),
        port: 8100,
        autoOpenBrowser: false,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        // childUrl:'vip_admin.htm',
        proxyTable: {
            '/api':{
                target:'http://jsonplaceholder.typicode.com',
                changeOrigin:true,
            }
        },
        cssSourceMap:false
    }
}