const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://way.jd.com/jisuapi/driverexamQuery",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": "",
        },
      },
    }
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vant": "vant",
      "vue-router": "VueRouter"
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false
};

