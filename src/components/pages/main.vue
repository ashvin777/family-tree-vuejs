<script src='./main.js'></script>

<style scoped lang="scss">
.page{
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="page">
    <Navbar :user="user"></Navbar>
    <router-view></router-view>
  </div>
</template>


