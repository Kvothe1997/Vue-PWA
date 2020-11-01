module.exports = {
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "/Vue-PWA/" : "/",
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
          purpose: "maskable",
        },
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
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
      msTileImage: null,
    },
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW",
  },
};
