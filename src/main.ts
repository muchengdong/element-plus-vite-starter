/* eslint-disable style/brace-style */
/* eslint-disable no-console */
/* eslint-disable style/comma-dangle */
import type { ViteSSGContext } from "vite-ssg"
// import type { UserModule } from "./types"

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import { createPinia } from "pinia"
import { ViteSSG } from "vite-ssg"
// import { routes } from "vue-router/auto-routes"
import App from "./App.vue"
import { routes } from "./router"

import "~/styles/index.scss"
import "uno.css"
// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"

import "element-plus/theme-chalk/src/message-box.scss"

// if you do not need ssg:
// import { createApp } from "vue";

// const app = createApp(App);
// app.use(createRouter({
//   history: createWebHistory(),
//   routes,
// }))
// // app.use(ElementPlus);
// app.mount("#app");

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  (ctx: ViteSSGContext) => {
    const pinia = createPinia()
    ctx.app.use(pinia)

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      ctx.app.component(key, component)
    }

    console.log(ctx.initialState)

    ctx.router.beforeEach((to, from, next) => {
      console.log(to)
      console.log(from)
      if (to.path === "/login") {
        next()
      } else {
        const token = localStorage.getItem("token")
        if (!token) {
          next({ path: "/login", query: { redirect: to.fullPath } })
        } else {
          next()
        }
      }
      //
      //  else if (!token) {
      //   next({ path: "/", query: { redirect: to.fullPath } })
      // } else {
      //   next({ path: "/login", query: { redirect: to.fullPath } })
      // }
    })

    // install all modules under `modules/`
    // Object.values(
    //   import.meta.glob<{ install: UserModule }>("./modules/*.ts", {
    //     eager: true,
    //   })
    // ).forEach((i) => i.install?.(ctx))
    // ctx.app.use(Previewer)
  }
)
