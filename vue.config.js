module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
  pwa: {
    iconPaths: {
      favicon32: "https://nmsl.maplewish.cn/favicon.ico",
      favicon16: "https://nmsl.maplewish.cn/favicon.ico",
      appleTouchIcon: "https://nmsl.maplewish.cn/favicon.ico",
      maskIcon: "https://nmsl.maplewish.cn/favicon.ico",
      msTileImage: "https://nmsl.maplewish.cn/favicon.ico"
    }
  }
};
