<template>
  <ul id="slider-menu">
    <li class="menu-item">联系我们</li>
    <li class="menu-item">上传规则</li>
    <li class="menu-item">关于</li>
  </ul>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #slider-menu {
    position: fixed;
    height: 100%;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    width: 200px;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
  }

  .menu-item {
    color: #fff;
  }
</style>
