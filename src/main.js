import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch);
app.component("font-awesome-icon", FontAwesomeIcon);

import store from "./store/index.js";
app.use(store);

app.mount("#app");
