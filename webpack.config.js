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
            }
        ]
    },
    
    //  用来配置应用层的模块解析，即要被打包的模块
    resolve: {
        extensions: ['', '.js', '.es6', '.vue'],
        fallback
    },
    
    //  用来配置 loader 模块的解析
    resolveLoader: {
        fallback
    },
    
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
