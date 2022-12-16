import { authStore } from "@/stores/auth"
import { Router } from "vue-router"

export default (router: Router) => {
    router.beforeEach((to) => {
        const routeNeedsAuth = to.meta.needAuth 
        const isAuthenticated = authStore.getters.value.isAuthenticated
        if(routeNeedsAuth){ 
            if(!isAuthenticated) {
                return {
                    name: 'login',
                }
            }
        }
    })
}