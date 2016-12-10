Webpack Hot Middleware
-----------------------
Webpack热加载模板

## 1. 原因
> 现有的模板都不满足要求，不是缺少模块，就是限制太多，修改起来非常麻烦，于是自己重启了一个项目，实验了多次，才得到了这么一个可灵活配置webpack模板。

## 2. 特性
1. 支持第三方的库的AMD加载；
2. 支持多入口webpack编译；
3. 支持Vue等端对端的解决方案；
4. 支持yaml配置文件；

## 3. 运行方式
```bash
#   启动调试模式
npm run dev
#   启动生产模式
#   支持github网站发布
npm run build
```

## 4. 测试说明
将libraryTarget改为“amd”后，发现动态加载main.js错误，生成的动态代码与编译构建后的代码相差非常巨大（相差大约1200多行代码），得到的对象完全不是源码导出的对象，而是具有subscrib等属性的新对象，具体代码如下：
```javascript
module.exports = {
    subscribeAll: function subscribeAll(handler) {
      subscribeAllHandler = handler;
    },
    subscribe: function subscribe(handler) {
      customHandler = handler;
    },
    useCustomOverlay: function useCustomOverlay(customOverlay) {
      if (reporter) reporter.useCustomOverlay(customOverlay);
    }
};
```
所以，从目前来看，“webpack-hot-middleware”暂不支持amd方式的热加载，估计与以下原因有关，正在继续研究。
```
As of version 2.0.0, all client functionality has been rolled into this module. This means that you should remove any reference to webpack/hot/dev-server or webpack/hot/only-dev-server from your webpack config. Instead, use the reload config option to control this behaviour.

This was done to allow full control over the client receiving updates, which is now able to output full module names in the console when applying changes.
```
除了入口文件，其他文件工作正常，看来入口文件只能以webpack后加载，而不能动态加载