<template>
    <mt-header :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="toggleMenu" id="more-btn"></mt-button>
    </mt-header>
</template>
<script>
export default {
  props: {
    title: String,
    toggleMenu: Function,
  },
}
</script>

<style scoped>
</style>

