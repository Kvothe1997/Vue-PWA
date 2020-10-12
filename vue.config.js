module.exports = {
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "/Vue-PWA/" : "/",
  pwa: {
    manifestOptions: {
      name: "Las Recetas de Lita",
      short_name: "Recetas",
      start_url: "./",
      display: "standalone",
      theme_color: "#000000",
      icons: {
        src: "./favicon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any maskable"
      }
    },

    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    iconPaths: {
      maskicon: null,
      favicon32: "./favicon.svg",
      favicon16: "./favicon.svg",
      appleTouchIcon: null,
      msTileImage: null
    },
    // configure the workbox plugin
    workboxPluginMode: "GenerateSW"
  }
};
