import { createStore } from "vuex";
import reactiveScrollAndResize from "./modules/reactiveScrollAndResize.js";
import searchAndFilter from "./modules/searchAndFilter.js";
import stickyNavBar from "./modules/stickyNavBar.js";

export default createStore({
  modules: {
    reactiveScrollAndResize,
    searchAndFilter,
    stickyNavBar,
  },
});
