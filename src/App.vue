<template>
  <div id="app">
    <router-view
      class="child-view"
      v-on:toggle-menu="toggleMenu">
    </router-view>
    <slider-menu v-if="showSlider" :toggleMenu="toggleMenu"></slider-menu>
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
      console.log('toggleMenu')
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
