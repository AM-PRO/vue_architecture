import { App } from "vue";
import { VueQueryPlugin } from "vue-query";

export default {
    install: (app: App) => {
        app.use(VueQueryPlugin);
    }
}
