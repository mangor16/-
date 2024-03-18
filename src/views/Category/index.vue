<script setup>
import GoodsCopy from '../Home/components/GoodsCopy.vue'
import { useBanner } from './composables/useBanner'
import { useCategory } from './composables/useCategory.js'
// 数据库(data.js)数据没有填充,直接跳转到其他商品的详细细节里
import { useRouter } from 'vue-router'
const router = useRouter()


// 获取分类数据
const { categoryData } = useCategory()

// 获取banner(HomeBanner.vue里的轮播图)
const { bannerList } = useBanner()
</script>

<template>
  <div class="top-category" v-for="bl in categoryData" :key="bl.id">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ bl.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="sub-list">
  <h3>全部分类</h3>
  <ul>
    <li v-for="i in bl.children" :key="i.id">
      <RouterLink :to="`/category/sub/${i.id}`">
        <img :src="i.picture" />
        <p>{{ i.name }}</p>
      </RouterLink>
    </li>
  </ul>
  </div>
    <div class="ref-goods" v-for="item in bl.goods" :key="item.id">
      <div class="head">
        <h3>- {{ item.name }}-</h3>
    </div>
      <div class="body">
        <GoodsCopy v-for="good in item.goods" :goods="good" :key="good.id" @click="router.push('/detail/123123')"/>
      </div>
</div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@keyframes Totob{
  0%{
    margin-top: 0px;
  }
  100% {
    margin-top: -15px;
  }
}
.top-category {
  h3 {
    font-size: 20px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
            animation: Totob 0.7s ease ;
            margin-top: -15px;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  left: 0;
  top: 0;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>