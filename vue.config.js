let webpack = require("webpack");

module.exports = {
  lintOnSave: false
  // configureWebpack: {
  //   plugins: [
  //     new webpack.LoaderOptionsPlugin({
  //       test: /\.vue$/,
  //       options: {
  //         hotReload: false // disables Hot Reload
  //       }
  //     })
  //   ]
  // }

  // chainWebpack: config => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap(options => {
  //       options.hotReload = false;
  //       return options;
  //     });
  // }
};
