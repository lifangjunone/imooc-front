import { computed } from "vue"  // computed 计算属性
import { PC_DEVICE_WIDTH  } from "@/constants"
import { useWindowSize } from "@vueuse/core"
 
const { width } = useWindowSize()
/**
 *  判断当前是否为移动端设备，判断的依据是屏幕宽度是否大于一个指定的值 （1280）
 */
export const isMobileTerminal = computed(()=>{
    return width.value < PC_DEVICE_WIDTH  
}) 

/**
 *  动态指定 指定 rem 基准值 
 */

export const useREM = () =>  {
    const MAX_FONT_SIZE = 40
    document.addEventListener('DOMContentLoaded', () => {
        const html = document.querySelector('html')
        let fontSize = window.innerWidth / 10
        fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
        html.style.fontSize = fontSize + 'px'
    })
}