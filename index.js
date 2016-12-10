//  配置AMD环境
require.config({
    
    baseUrl: 'dist/',
    
     packages: [{
        name: 'jquery',
        location: 'node_modules/jquery/dist',
        main: 'jquery'
    }]
    
});
//  启动应用程序
require(['main'], function(app) {
   //   app.default();
    console.log(app)
});