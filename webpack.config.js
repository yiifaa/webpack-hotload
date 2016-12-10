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
        libraryTarget : 'amd'  
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
        'jquery' : 'jquery'
    },
    
    //  可以优化，添加到webpack.config.server.js中
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
