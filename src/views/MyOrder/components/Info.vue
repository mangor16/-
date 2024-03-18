<script setup>
import HomeShopTemplate from '@/views/Home/components/HomeShopTemplate.vue'
import { getHotAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'
const hotList = ref([])
const getHotList = async () => {
  const res = await getHotAPI()
  hotList.value = res
}
onMounted(() => getHotList())
</script>

<template>
  <div class="info-page" >
    <!--顶部用户信息-->
    <div class="top-info">
      <div class="left-user-avatar">
        <div class="welcome-text">
          <h3>你好! </h3>
          <p>欢迎来到芒苟儿商城！</p>
        </div>
      </div>
      <div class="right-user-select">
        <ul>
          <li >
            <i class="iconfont icon-huiyuan"></i>
            <p>会员中心</p>
          </li>
          <li >
            <i class="iconfont icon-shezhi"></i>
            <p>安全设置</p>
          </li>
          <li >
            <i class="iconfont icon-dizhi1"></i>
            <p>地址管理</p>
          </li>
        </ul>
      </div>
    </div>
    <!--我的收藏数据-->
    <div class="my-collect">
      <HomeShopTemplate title="热销商品" >
        <ul>
        <li v-for="item in hotList" :key="item.id">
            <img v-img-lazy="item.picture" alt="" class="image">
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
        </li>
      </ul>
      </HomeShopTemplate>
    </div>
    <!--获取我的足迹-->
    <div class="my-history">
      <HomeShopTemplate title="我的足迹">
        <p>暂无更多信息</p>
      </HomeShopTemplate>
    </div>
  </div>
</template>


<style scoped lang="scss">
.info-page{
  width: 100%;
  .top-info{
    width: 100%;
    height: 100px;
    background-color: #990033;
    background-size: 180px;
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-user-avatar{
      display: flex;
      align-items: center;
      height: 60px;
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
        margin-left: 10px;
      }
      .welcome-text{
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: space-between;
        color: #fff;
        h3{
          margin-top: 5px;
        }
        p{
          margin-bottom: 5px;
        }
      }
    }
    .right-user-select{
      margin-right: 150px;
      ul {
        display: flex;
        align-items: center;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 20px;
          cursor: pointer;
          p{
            font-size:14px;
            color: #fff;
          }
          i{
            font-size: 28px;
            color: #fff;
          }
        }
      }
    }
  }
}
.my-collect, .my-history{
  margin-top: 20px;
  overflow: hidden;
  ul li {
    display: inline-block;
    margin-left: 30px;
    .image {
    width: 200px;
    height: 200px;
  }
  }
  .myhistory-list{
    display: flex;
    align-items: center;
    .hitstory-item{
      margin-right: 30px;
      cursor: pointer;
      width: 160px;
      height: 160px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      .item-content{
        bottom: -160px;
        border-radius: 10px;
        position: absolute;
        width: 160px;
        height: 160px;
        color: #fff;
        padding: 10px;
        box-sizing: border-box;
        background-color: rgba(0,0,0,0.3);
        transition: all .3s;
      }
      &:hover{
        .item-content{
          bottom: 0;
        }
      }
      img{
        width: 100%;
      }
    }
  }
}

</style>
