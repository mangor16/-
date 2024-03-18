import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart.js'

export const useCartStore = defineStore('cart', () => {
  // 1.定义state
  const cartList = ref([])
  const getCartList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res
  }
  // 2.定义action - addcart
  const addCart = async (commodity) => {
    /* 解构赋值 */
    const { skuId, count, price, attrsText, name, selected, picture } = commodity
    await insertCartAPI({ skuId, count, price, attrsText, name, selected, picture })
    getCartList()

  }


  // 删除购物车
  const delCart = async (skuId) => {
    // 思路:  找到下标值 - splice  
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx, 1)
  }

  // 计算所有商品的数量和价格之和
  // 1. 总的数量 所有项的count之和
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  // 2. 总价 所有项的 count*price 之和
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  // 3.已经选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 4.已经选择商品价格合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  // 单选功能
  const change = (skuId, selected) => {
    // 通过skuid修改被选中的商品
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  // 是否全选  every 每一项的selected都为true的时候绑定该方法的单选框也为true
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  // 全选功能 点击使所有的商品的selected的值都为true
  const allCheck = (selected) => {
    cartList.value.forEach((item) => item.selected = selected)
  }

  return {
    isAll,
    allCount,
    allPrice,
    selectedCount,
    cartList,
    selectedPrice,
    addCart,
    delCart,
    getCartList,
    change,
    allCheck
  }
}, {
  persist: true
}
)