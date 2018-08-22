<template>
  <div>
    <ul id="slider-menu">
      <mt-cell title="联系我们" is-link></mt-cell>
      <mt-cell title="关于" is-link></mt-cell>
      <img src="../assets/qr_code.jpg" alt="" class="qr-code">
    </ul>
    <div class="mask" @click="hideMenu"></div>
  </div>
</template>

<script>
  export default {
    props: ['toggleMenu'],
    methods: {
      hideMenu() {
        this.toggleMenu()
      }
    }
  }
</script>

<style scoped>
  #slider-menu {
    position: fixed;
    height: 100%;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #fff;
    width: 200px;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
  }

  .menu-item {
    color: #fff;
    text-align: center;
  }

  .mask {
    background-color: #000;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .qr-code {
    position: absolute;
    width: 100px;
    bottom: 50px;
    margin: 0 auto;
    left: 50px;
  }
</style>
