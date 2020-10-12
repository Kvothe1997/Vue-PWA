# Vue PWA

## How to deploy your Vue.js SPA on GitHub Pages?

The simplest way is to execute `npm run build` and then commit the output folder to your master branch. However, the output folder is a `/dist` folder and GitHub Pages only lets you deploy from a `/docs` folder. You can easily have Vue change the name of the output folder to `/docs` by adding the following line to your vue.config.js file:

```
module.exports = {
  outputDir: "docs",
};
```




