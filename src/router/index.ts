import type { RouteRecordRaw } from "vue-router"

const LAYOUT = () => import("~/components/layouts/BaseLayout.vue")

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("~/pages/Login.vue"),
  },
  {
    path: "/",
    component: LAYOUT,
    redirect: "/dashborad",
    children: [
      {
        path: "/dashborad",
        component: () => import("~/pages/Dashborad.vue"),
      },
      {
        path: "/about",
        component: () => import("~/pages/About.vue"),
      },
    ],
  },
]
