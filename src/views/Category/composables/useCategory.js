// 将来封装分类数据的相关业务代码
import { ref, onMounted } from 'vue'
// 👇 解决路由缓存问题
import { onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '@/apis/category.js'
import { useRoute } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  // useRoute获取路由的参数(位置)
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res
  }
  onMounted(() => getCategory())
  // 目标:期望路由参数变化的时候，可以把分类数据接口重新发送
  // to是最新的路由参数中的数据
  onBeforeRouteUpdate((to) => {
    // 存在问题: 使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id)
  }
  )
  return {
    categoryData
  }
}