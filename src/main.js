import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
library.add(faMoon);
library.add(faSun);
app.component("font-awesome-icon", FontAwesomeIcon);

import store from "./store/index.js";
app.use(store);

app.mount("#app");
