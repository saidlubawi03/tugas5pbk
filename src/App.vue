<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-deep-purple text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://i.pinimg.com/originals/95/64/c4/9564c4ec194a68f4cd898080c8122846.png">
          </q-avatar>
          StepSync Studio
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab to="/" label="Beranda" />
        <q-route-tab to="/about" label="Tentang" />
        <q-route-tab to="/contact" label="Kontak" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple @click="navigateTo('/')">
          <q-item-section>
            <q-item-label>Beranda</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/about')">
          <q-item-section>
            <q-item-label>Tentang</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="navigateTo('/contact')">
          <q-item-section>
            <q-item-label>Kontak</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-deep-purple-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://i.pinimg.com/originals/95/64/c4/9564c4ec194a68f4cd898080c8122846.png">
          </q-avatar>
          <div>StepSync Studio</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const router = useRouter()

    const navigateTo = (route) => {
      leftDrawerOpen.value = false
      router.push(route)
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      navigateTo
    }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
