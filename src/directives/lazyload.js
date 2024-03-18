// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted(el, bingding) {
        // el: 指令绑定的那个元素 img
        // bingding:bingding.value 指令等于号后面绑定的表达式的值 图片url
        useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 进入视口区域
              el.src = bingding.value
              // 该方法会一直监听元素是否可视，需要手动停止，防止内存浪费
              stop()
            }
          },
        )
      }
    })
  }
}