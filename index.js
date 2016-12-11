//  在var模式下无效，只适用于amd模式
//  配置AMD环境
require.config({
    
    baseUrl: 'dist/'
    
});
//  启动应用程序
require(['main'], function(app) {
   app.default(); 
});