import { createRouter, createWebHashHistory } from "vue-router";
import needAuth from "./middlewares/needAuth";
import todoRoutes from "./routes/todoRoutes";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login.vue'),
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('@/views/Logout.vue'),
        },
        ...todoRoutes
    ],
});

needAuth(router)

export default router;
