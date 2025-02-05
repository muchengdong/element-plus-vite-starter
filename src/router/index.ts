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
    name: "LAYOUT",
    redirect: "/dashborad",
    children: [
      {
        path: "/dashborad",
        name: "Dashborad",
        component: () => import("~/pages/Dashborad.vue"),
      },
      {
        path: "/datasets",
        name: "Datasets",
        component: () => import("~/pages/Datasets.vue"),
      },
      {
        path: "/training",
        name: "Training",
        component: () => import("~/pages/Training.vue"),
      },
      {
        path: "/task",
        name: "Task",
        component: () => import("~/pages/Task.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("~/pages/About.vue"),
      },
    ],
  },
]
