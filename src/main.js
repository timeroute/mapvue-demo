import { createApp } from "vue";
import MapVue from "mapvue";
// import "mapvue/dist/mapvue.css" in vite
// import "mapvue/dist/style.css"; in vue-cli
import "mapvue/dist/style.css";
import App from "./App.vue";
import router from "./router";
import "./main.css";

createApp(App)
  .use(MapVue)
  .use(router)
  .mount("#app");