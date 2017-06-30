var path = require('path')
var utils = require('./utils')
var fs = require('fs')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var getModulesDir = function () {
    return fs.readdirSync('./src/view/');
};


var getEntry = function () {  
    var res = {};
    var module = getModulesDir();
    module.forEach(function (el) {
        var appPath = './src/view/' + el + '/main.js';
        fs.existsSync(appPath) && (res[el] = [appPath]);
    });
    console.log(res);
    return res;
};

module.exports = {
    entry:getEntry(),
    output: {
        path: config.build.assetsRoot,   // webpack输出的目标文件夹路径（例如：/dist）
        filename:'[name].js',
        publicPath: process.env.NODE_ENV === 'production'   // webpack编译输出的发布路径
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],   // 自动resolve的扩展名
        modules: [     // resolve模块的时候要搜索的文件夹
            resolve('src'),
            resolve('node_modules')
        ],
        alias:{ ///指定文件夹的路径
            'vue$': 'vue/dist/vue.common.js',   
            'api':resolve('src/api'),
            '@common':resolve('src/common'),
        }
    },
    module:{  // 配置不同类型模块的处理规则
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test:/\.scss$/,
                include:'/src/',
                loader:ExtractTextPlugin.extract(['sass-loader'])
               // loader: 'style!css!sass'
            },
            {
                test:/\.css$/,
                include: [resolve('src')],
                use: ExtractTextPlugin.extract({
                    use: ['style-loader','css-loader']
                    //use: 'css-loader'
                })    
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 1,
                    name: utils.assetsPath('images/[name].[hash:7].[ext]')
                }   
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}
