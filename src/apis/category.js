import httpInstance from '@/utils/http'

export const getCategoryAPI = (id) => {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: '/filter',
    params: {
      id
    }
  })
}

