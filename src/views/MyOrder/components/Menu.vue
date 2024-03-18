<script setup>
</script>
<template>
  <div class="r-menu-component">
    <div class="r-menu-item">
      <div class="r-menu-title">个人中心</div>
      <ul>
        <li>
          <RouterLink to="/MyOrder/info" active-class="menuActive" >个人中心</RouterLink>
        </li>
        <li><a href="">个人信息</a></li>
        <li><a href="">安全设置</a></li>
        <li><a href="">地址管理</a></li>
        <li><a href="">我的积分</a></li>
      </ul>
    </div>
    <div class="r-menu-item">
      <div class="r-menu-title">交易管理</div>
      <ul>
        <li>
          <RouterLink to="/MyOrder/center" active-class="menuActive">订单中心</RouterLink>
        </li>
        <li ><a href="">优惠卷</a></li>
        <li><a href="">礼品卡  </a></li>
        <li><a href="">晒单评价</a></li>
        <li><a href="">售后服务</a></li>
      </ul>
    </div>
    <div class="r-menu-item">
      <div class="r-menu-title">我的收藏</div>
      <ul>
        <li><a href="">收藏的商品</a></li>
        <li><a href="">收藏的专题</a></li>
        <li><a href="">关注的品牌</a></li>
      </ul>
    </div>
    <div class="r-menu-item">
      <div class="r-menu-title"><a href="">帮助中心</a></div>
      <ul>
        <li><a href="">帮助中心</a></li>
        <li><a href="">在线客服</a></li>
      </ul>
    </div>
  </div>
</template>



<style scoped lang="scss">
.r-menu-component{
  width: 248px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  .r-menu-item{
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 20px;
    margin-bottom: 30px;
    .r-menu-title{
      font-size: 16px;
      font-weight: bold;
      position: relative;
      padding-left: 10px;
      &:after{
        content: '';
        display: inline-block;
        width: 3px;
        height: 20px;
        background: #990033;
        position: absolute;
        left: 0;
        border-radius: 5px;
      }
    }
    ul{
      margin-top: 20px;
      li{
        width: 100%;
        border-radius: 6px;
        display: flex;
        padding: 10px 0px;
        box-sizing: border-box;
        align-items: center;
        color: #333;
        transition: all .3s;
        cursor: pointer;

        a{
          display: block;
          width: 100%;
          transition: all .3s;
          &.menuActive{
            display: block;
            border-radius: 6px;
            padding: 10px;
            width: 100%;
            height: 100%;
            background-color: #990033;
            color: #fff;
            font-weight: bold;
          }
          &:hover{
            display: block;
            border-radius: 6px;
            padding: 10px;
            width: 100%;
            height: 100%;
            background-color: #990033;
            color: #fff;
            font-weight: bold;
          }
        }

      }
    }
    &:last-child{
      border-bottom: none;
    }
  }
}
</style>