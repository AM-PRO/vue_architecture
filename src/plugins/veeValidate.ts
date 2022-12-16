import { App } from "vue";
import { Field, Form, ErrorMessage } from 'vee-validate';

export default {
    install(app: App) {
        app.component('Form', Form);
        app.component('Field', Field);
        app.component('ErrorMessage', ErrorMessage);
    }
}