import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import routes from "./routes";
import App from "./App.vue";

createApp(App).use(routes).use(createPinia()).mount("#app");
