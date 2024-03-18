// 把components中的方法全局注册
import ImgView from './ImgView/index.vue'
import Sku from './Sku/index.vue'

export const componentMethod = {
  install(app) {
    // app.component('组件名字',组件配置对象)
    app.component('ImgView', ImgView)
    app.component('Sku', Sku)
  }
}
