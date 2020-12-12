module.exports = {
  // outputDir: process.env.NODE_ENV === "production" ? "docs" : "test",
  // publicPath:
  //   process.env.NODE_ENV === "production"
  //     ? "/Vue-PWA/"
  //     : process.env.NODE_ENV === "test"
  //     ? "./"
  //     : "/",
  outputDir: process.env.VUE_APP_OUTPUT_DIR,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  pwa: {
    manifestOptions: {
      name: "Las Recetas de Lita",
      short_name: "Recetas",
      start_url: "./",
      display: "standalone",
      theme_color: "#ffffff",
      background_color: "#5688ba",
      icons: [
        {
          src: "./img/icons/maskable_icon.png",
          sizes: "1024x1024",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },

    themeColor: "#ffffff",
    msTileColor: "#ffffff",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    iconPaths: {
      maskicon: "./img/icons/safari-pinned-tab.svg",
      favicon32: "./img/icons/favicon-32x32.png",
      favicon16: "./img/icons/favicon-16x16.png",
      appleTouchIcon: "./img/icons/apple-touch-icon.png",
      msTileImage: null
    },
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      exclude: [
        /img\/[\s\S]*\.webp$/,
        /recetas\/[\s\S]*\.html$/,
        /css\/[\s\S]*\.css\.map$/
      ],
      runtimeCaching: [
        {
          handler: "StaleWhileRevalidate",
          urlPattern: /img\/[\s\S]*\.webp$/
        },
        {
          handler: "StaleWhileRevalidate",
          urlPattern: /recetas\/[\s\S]*\.html$/
        }
      ]
    }
  }
};
