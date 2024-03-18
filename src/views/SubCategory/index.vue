<script setup>
import { getCategoryFilterAPI } from '@/apis/category.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import  GoodsCopy  from '@/views/Home/components/GoodsCopy.vue'


const route = useRoute()
const categoryData = ref({})
const getCategroyData = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  categoryData.value = res
}
onMounted(() => getCategroyData())

</script>

<template>
  <div class="container " v-for="item in categoryData" :key="item.id">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${item.parentId}` }">{{ item.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container" >
      <el-tabs >
        <el-tab-pane label="最新商品" name="publishTime">
          <div class="body" >
         <!-- 商品列表-->
          <GoodsCopy v-for="goods in item.goods" :goods="goods" :key="goods.id"/>
      </div>
        </el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum">
          <div class="body" >
         <!-- 商品列表-->
          <GoodsCopy v-for="goods in item.goodsSecond" :goods="goods" :key="goods.id"/>
      </div>
        </el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum">
        <div class="body" >
         <!-- 商品列表-->
          <GoodsCopy v-for="goods in item.goodsThired" :goods="goods" :key="goods.id"/>
      </div>
        </el-tab-pane>
      </el-tabs>
      <div class="body" >
         <!-- 商品列表-->
          <GoodsCopy v-for="goods in item.goods" :goods="goods" :key="goods.id"/>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>