var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&overlay=false',
    buildConfig = require('./webpack.config'),
    entries = Object.keys(buildConfig.entry);
//  添加热加载信息
entries.forEach((key) => {
    buildConfig.entry[key].push(hotMiddlewareScript);
});
//  导出热加载配置
module.exports = buildConfig