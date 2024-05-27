import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from "../pages/homeview.vue"
import AboutView from "../pages/aboutview.vue"
import ContactView from "../pages/ContactView.vue" 

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView }, 
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
