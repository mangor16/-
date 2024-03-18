<script setup>

import { useCategoryStore } from '@/stores/category.js'
import LayoutCart  from './LayoutCart.vue'

import { useCategory } from '@/views/Category/composables/useCategory.js'

// 获取分类数据
const { categoryData } = useCategory()

const categoryStore = useCategoryStore()
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <!-- 上在css中引入了图片 -->
        <RouterLink to="/">芒苟儿</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜你想搜">
      </div>
      <!-- 头部购物车 -->
      <LayoutCart/>
      <!-- 鼠标悬停触发详细列表 -->
      <div class="layer" v-for="bl in categoryData" :key="bl.id">
        <ul>
          <li v-for="i in bl.children" :key="i.id">
          <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.picture" />
          </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>


<style scoped lang='scss'>
@keyframes enterenter {
            0% {
                /* 加上文字间距 */
                letter-spacing: 1em;
                /* Z轴变换 */
                transform: translateZ(300px);
                /* filter: blur(); 像素模糊效果 */
                filter: blur(8px);
                /* 透明度也要改变 */
                opacity: 0;
            }

            100% {
                transform: translateZ(12px);
                filter: blur(0);
                opacity: 1;
            }
        }
.app-header {
  background: #fff;
  .layer {
        width: 1200px;
        height: 150px;
        background: rgba(255,255,255);
        position: absolute;
        left: 50px;
        top: 132px;
        display: none;
        padding: 0 15px;
        z-index:100;
        border-radius: 10px;
        img {
          width: 120px;
          height: 120px;
          float: left;
          margin-left: 30px;
          animation: enterenter 0.8s ease-in-out ;
      }
      }
  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo4.jpg') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
  
    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;
      
  
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
  
        &:hover {
          
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
          
        }
      }
  
      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
  &:hover{
        .layer {
            display: block;
          }
      }
}
</style>