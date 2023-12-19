import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.css";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(MotionPlugin);
app.mount("#app");
