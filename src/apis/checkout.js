import httpInstance from '@/utils/http.js'

// 获取详情接口
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: '/pre'
  })
}



