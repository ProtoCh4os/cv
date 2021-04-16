import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "./assets/sass/variables.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
