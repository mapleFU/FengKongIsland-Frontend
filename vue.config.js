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
      favicon32: "img/icons/favicon.ico",
      favicon16: "img/icons/favicon.ico",
      appleTouchIcon: "img/icons/favicon.ico",
      maskIcon: "img/icons/favicon.ico",
      msTileImage: "img/icons/favicon.ico"
    }
  }
};
