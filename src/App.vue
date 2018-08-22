<template>
  <div id="app">
    <router-view class="child-view" :toggleMenu="toggleMenu">
    </router-view>
    <c-slider-menu v-if="showSlider" :toggleMenu="toggleMenu"></c-slider-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showSlider: false
    }
  },

  methods: {
    toggleMenu() {
      this.showSlider = !this.showSlider
    },
  },
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
