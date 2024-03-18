import httpInstance from '@/utils/http'

export const getOrderAPI = (id) => {
  return httpInstance({
    url: "/order"
  })
}