const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://iwenwiki.com:3000',//目标地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      },
      '/foo': {
        target: 'http://interface.music.163.com',//目标地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/foo": ''
        }
      },
      '/boo': {
        target: 'https://music.163.com',//目标地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/boo": ''
        }
      },
    }
  }
})