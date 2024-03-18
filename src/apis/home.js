/* 获取banner的图片 */
import httpInstance from '@/utils/http'
export function getBannerAPI() {
  return httpInstance({
    url: '/banner'
  })
}

/* 获取HomeNew的列表 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/new'
  })
}
// 热门区域
export const getHotAPI = () => {
  return httpInstance({
    url: '/hot'
  })
}
// 懒加载的商品
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/goods'
  })
}