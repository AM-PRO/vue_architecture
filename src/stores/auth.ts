import { reactive, computed, ComputedRef } from "vue";
import { User } from "@/core/entities/user";

export interface AuthState {
    user: User | null
}

export interface AuthGetters {
    isAuthenticated: boolean,
}

export interface AuthStore {
    state: AuthState,
    getters: ComputedRef<AuthGetters>,
}

export const authState = reactive<AuthState>({
    user: null
})

export const authGetters: ComputedRef<AuthGetters> = computed(() => {
    return {
        isAuthenticated: !!authState.user,
    }
})

export const authStore: AuthStore = {
    state: authState,
    getters: authGetters,
}