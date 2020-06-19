import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router, routerHistory } from "./router";
const app = createApp(App);
app.use(router);
app.mount("#app");
