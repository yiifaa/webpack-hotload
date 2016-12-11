//  基本配置文件，服务器配置基于此进行扩展
var configs = require('./configs'),
    webpack = require('webpack'),
    fallback = configs.libPath,
    context = configs.context;

module.exports = {
    
    context,

    entry: {
        main : ['./es6/index.es6']
    },

    output: {
        path: configs.dist,
        publicPath: '/dist/',
        filename: '[name].js',
        //  umd包含了对amd、commonjs、var等多种规范的支持  
        libraryTarget : 'var'  
    },

    devtool: '#source-map',
    
    module: {
        loaders: [
            /* ES6编译 */
            {
                test: /\.es6$/,
                loader: 'babel-loader',
                include: configs.src,
                exclude: /(node_modules|bower_components|dist)/
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.scss$/,
                loader: "style!css!sass"
            }, {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }, {
                test: /\.(html|tpl)$/,
                loader: "html"
            }
        ]
    },
    
    //  用来配置应用层的模块解析，即要被打包的模块
    resolve: {
        //  .js扩展非常重要，千万不要忽略，否则经常出现模块无法加载错误
        extensions: ['', '.js', '.es6', '.vue'],
        fallback
    },
    
    //  用来配置 loader 模块的解析
    resolveLoader: {
        fallback
    },
    
     
    /*
     * 需要从外部引入的库文件
     */
    externals: {
        'jquery' : 'jQuery',
        'vue'    : 'Vue'
    },
    
    //  可以优化，添加到webpack.config.server.js中
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
