<template>
  <div v-model="game">
    <mt-header :title="game.nameCN">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <img src="../assets/caption.jpg" alt="" class="cover">
    <div></div>
    <div><span>游戏名：</span><span>{{game.nameCN}}</span></div>
    <div><span>设计美术：</span><span>{{game.designersCN}}</span></div>
    <div><span>语言依赖：</span><span>不知道</span></div>
    <div><span>机制分类：</span><span>{{game.mechanicsCN}}</span></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        game: {}
      }
    },

    created() {
      const id = this.$route.params.id
      this.$http.get(`http://180.76.244.130:3000/games/getGameInfo?gameid=${id}&lang=cn`)
        .then(resp => {
          if (resp.status === 200) {
            this.game = resp.body
          }
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
