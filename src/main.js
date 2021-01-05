import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faMoon,
  faSun,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
library.add(faMoon);
library.add(faSun);
library.add(faBars);
app.component("font-awesome-icon", FontAwesomeIcon);

import { FocusTrap } from "focus-trap-vue";
app.component("FocusTrap", FocusTrap);

import store from "./store/index.js";
app.use(store);

import router from "./router";
app.use(router);

app.mount("#app");
