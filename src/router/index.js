import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Content from "../pages/Content.vue"
import About from "../pages/About.vue"
import Products from "../pages/Products.vue"
import Brands from "../pages/Brands.vue"
import Contact from "../pages/Contact.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: to => {
      return {
        path: '/home'
      }
    },
    children: [
      {
        path: "/home",
        name: "Content",
        component: Content
      },
      {
        path: "/about",
        name: "About",
        component: About
      },
      {
        path: "/products",
        name: "Products",
        component: Products
      },
      {
        path: "/brands",
        name: "Brands",
        component: Brands
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
