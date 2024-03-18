// 封装购物车相关接口
import httpInstance from '@/utils/http'

// 加入购物车
export const insertCartAPI = ({ skuId, count, price, attrsText, name, selected, picture }) => {
  return httpInstance({
    url: '/cart',
    method: 'POST',
    data: {
      count,
      skuId,
      price,
      attrsText,
      name,
      selected,
      picture
    }
  })
}

// 获取最新的购物车列表
export const findNewCartListAPI = () => {
  return httpInstance({
    url: '/cart'
  })
}

// 删除购物车
export const delCartAPI = (skuId) => {
  return httpInstance({
    url: '/cart',
    method: 'DELETE',
    data: {
      skuId
    }
  })
}

// 合并购物车

export const mergeCartAPI = (data) => {
  return httpInstance({
    url: '/cart',
    method: 'POST',
    data
  })
}