module.exports = {
    runtimeCompiler: true,
    productionSourceMap: true,
    configureWebpack: {
      devtool: 'nosources-source-map'
    },
      pwa: {
        name: 'Vue',
        themeColor: '#212121',
        msTileColor: '#212121',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'blue',
        workboxOptions: {
          skipWaiting: true,
          clientsClaim: true
      }
      }
    }
  }
