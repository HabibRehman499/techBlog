import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "bootstrap/dist/css/bootstrap.css";

// import './public/css/element-plus/lib/theme-chalk/index.css'
// import 'element-plus/lib/theme-chalk/index.css'
import "element-plus/dist/index.css";

const app = createApp(App);

// Register components globally
app.use(ElementPlus);
app.use(store);
app.use(router);

app.mount("#app");

// createApp(App).use(store).use(router).mount('#app')
