import type { ViteSSGContext } from 'vite-ssg'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export const install = (ctx: ViteSSGContext) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        ctx.app.component(key, component)
    }
}