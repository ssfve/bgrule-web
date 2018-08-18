<template>
  <div id="app" v-on:click="tryCloseMenu">
    <router-view
      class="child-view"
      v-on:toggle-menu="toggleMenu">
    </router-view>
    <slider-menu v-if="showSlider"></slider-menu>
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

    tryCloseMenu(e) {
      const className = e.target.className
      if (className && className.includes('mintui-more')) {
        return
      }
      console.log(e.target)
      if (e.target.id !== 'slider-menu' && this.showSlider) {
        this.toggleMenu()
      }
    }
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
