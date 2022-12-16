import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import locatorPlugin from './plugins/locator'
import vueQueryPlugin from './plugins/vueQuery'
import veeValidate from './plugins/veeValidate'
import router from "./router";

const app = createApp(App);

app.use(locatorPlugin)
app.use(router)
app.use(vueQueryPlugin)
app.use(veeValidate)
app.mount("#app")
