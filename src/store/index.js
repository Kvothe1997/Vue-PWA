import { createStore } from "vuex";
import reactiveScrollAndResize from "./modules/reactiveScrollAndResize.js";
import searchAndFilter from "./modules/searchAndFilter.js";
import stickyNavBar from "./modules/stickyNavBar.js";
import reactiveOnlineStatus from "./modules/reactiveOnlineStatus.js";
import blurredBackground from "./modules/blurredBackground.js";
import homeRouteNavigation from "./modules/homeRouteNavigation.js";
import recetas from "./modules/recetas.js";

export default createStore({
  modules: {
    reactiveScrollAndResize,
    searchAndFilter,
    stickyNavBar,
    reactiveOnlineStatus,
    blurredBackground,
    homeRouteNavigation,
    recetas
  }
});
