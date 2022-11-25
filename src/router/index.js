import { createRouter, createWebHistory } from "vue-router"
import {isMobileTerminal} from "@/utils/flexible"
import mobileRouter from "./modules/mobile-routes"
import pcRouter from "./modules/pc-routes"

// 创建vueRouter实例

const router = createRouter({
    history: createWebHistory(),
    routes: isMobileTerminal.value ? mobileRouter : pcRouter
})

export default router