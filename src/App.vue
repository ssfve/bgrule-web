<template>
  <div id="app">
    <router-view class="child-view"></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style>
  #app {
    height: 100%;
  }

  .child-view {
    width: 100%;
    min-height: 100%;
    background: white;
    overflow: hidden;
  }
</style>
