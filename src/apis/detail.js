import httpInstance from '@/utils/http'

export const getDetail = (id) => {
  return httpInstance({
    url: '/commodity',
    params: {
      id
    }
  })
}
export const getDetailHot = () => {
  return httpInstance({
    url: '/detailHot',
  })
}