<template>
  <div>
    <Navbar :user="authStore.state.user" :isAuthenticated="authStore.getters.value.isAuthenticated"></Navbar>
    <router-view></router-view>
    <div class="text-lg fixed bottom-0 right-0 p-5 font-bold bg-black text-white opacity-20" v-if="mock">MOCK VERSION
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { injectStrict } from './composables/injectStrict';
import { PERSISTENCE } from './core/services/keys';
import { authStore } from './stores/auth';

export default defineComponent({
  setup() {
    const persistenceService = injectStrict(PERSISTENCE)
    authStore.state.user = persistenceService.getUser()
    
    return {
      mock: import.meta.env.VITE_APP_MOCK,
      authStore
    }
  }
})
</script>

<style scoped>

</style>