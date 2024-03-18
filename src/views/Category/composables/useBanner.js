// 将来封装Banner轮播图的相关业务代码
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home.js'

export function useBanner() {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI()
    bannerList.value = res
  }

  onMounted(() => getBanner())
  return {
    bannerList
  }
}



/* 实现步骤：
1. 按照业务声明以 `use` 打头的逻辑函数
2. 把独立的业务逻辑封装到各个函数内部
3. 函数内部把组件中需要用到的数据或者方法return出去
4. 在组件中调用函数把数据或者方法组合回来使用 */