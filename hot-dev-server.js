var http = require('http'),
    express = require('express'),
    configs = require('./configs'),
    devConfig = configs.dev,
    app = express();

app.use(require('morgan')('short'));

//  准备编译
var webpack = require('webpack'),
    webpackConfig = require('./webpack.config.server'),
    compiler = webpack(webpackConfig);
 
//  激活开发中间件
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

//  关联编译器与服务器
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, 
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

//  单页面应用
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

//  启动服务器
if (require.main === module) {
  var server = http.createServer(app);
  server.listen(devConfig.port, function() {
      if(devConfig.debug) {
          console.log("Listening on %j", server.address());
      }
  });
}
