const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    hot: true, //自动保存
    open: true, //自动启动
    port: 8080, //默认端口号
    host: "127.0.0.1",
  },
  publicPath: (process.env.NODE_ENV = "production" ? "./" : "/"),
});
