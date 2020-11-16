# Vue 3 PWA

This is my first PWA using Vue.js. In this project, I have used technologies such as:
1. Vue 3 (Options API, v-bind, @, v-if, v-for, v-html, refs, transitions  )
1. Vuex
1. Vue CLI and Vue UI
1. Fontawesome
1. CSS (Flexbox, multi-column)
1. JavaScript (Fetch and event-listeners)

## How to deploy your Vue.js SPA on GitHub Pages?

The simplest way is to execute `npm run build` and then commit the output folder to your master branch. However, the output folder is a `/dist` folder and GitHub Pages only lets you deploy from a `/docs` folder. You can easily have Vue change the name of the output folder to `/docs` by adding the following line to your vue.config.js file:

```
module.exports = {
  outputDir: "docs",
};
```

Note: This page is available at https://kvothe1997.github.io/Vue-PWA/


