<script setup>
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="member-page">
    <!--内容区域-->
    <div class="member-content container">
      <div class="menu-area">
        <Menu></Menu>
      </div>
      <div class="content-area">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.member-page{
  background-color: #f5f5f5;
  overflow: hidden;
  .member-content{
    display: flex;
    margin-top: 40px;
    margin-bottom: 40px;
    .menu-area{
      width: 248px;
    }
    .content-area{
      flex: 1;
      margin-left: 20px;
    }
  }
}
</style>
