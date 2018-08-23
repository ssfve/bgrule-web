<template>
  <div v-model="game">
    <c-header :title="game.nameCN" :toggleMenu="toggleMenu"></c-header>
    <img src="../assets/caption.jpg" alt="" class="cover">
    <div class="grid-view">
      <div class="grid-item">
        <div class="badge">
          <span class="rate-number">7.8</span>
        </div>
        <h6 class="badge-comment">24.6k</h6>
      </div>
      <div class="grid-item">
        <div class="badge">
          <img src="../assets/interface/year.svg" alt="" class="inner-badge">
        </div>
        <h6 class="badge-comment">{{game.yearpublished}}</h6>
      </div>
      <div class="grid-item">
        <div class="badge">
          <img src="../assets/interface/weight.svg" alt="" class="inner-badge">
        </div>
        <h6 class="badge-comment">2014</h6>
      </div>
      <div class="grid-item">
        <div class="badge">
          <img src="../assets/interface/age.svg" alt="" class="inner-badge">
        </div>
        <h6 class="badge-comment">2014</h6>
      </div>
      <div class="grid-item">
        <div class="badge">
          <img src="../assets/interface/players.svg" alt="" class="inner-badge">
        </div>
        <h6 class="badge-comment">2014</h6>
      </div>
      <div class="grid-item">
        <div class="badge">
          <img src="../assets/interface/clock.svg" alt="" class="inner-badge">
        </div>
        <h6 class="badge-comment">2014</h6>
      </div>
    </div>
    <div class="game-detail">
      <div>
        <span class="detail-label">游戏名：</span>
        <span class="detail-content">{{game.nameCN}}</span>
      </div>
      <div>
        <span class="detail-label">设计美术：</span>
        <span class="detail-content">{{game.designersCN}}</span>
      </div>
      <div>
        <span class="detail-label">语言依赖：</span>
        <span class="detail-content">不知道</span>
      </div>
      <div>
        <span class="detail-label">机制分类：</span>
        <span class="detail-content">{{game.mechanicsCN}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['toggleMenu'],
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
  .grid-view {
    display: flex;
    margin: 16px 16px 0 16px;
  }

  .grid-item {
    width: 16%;
  }

  .grid-item:not(:first-of-type) {
    margin-left: 15px;
  }

  .badge {
    position: relative;
    background-image: url(/img/37474F.b7933af9.svg);
    background-repeat: no-repeat;
    height: 62px;
  }

  .rate-number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2em;
    color: #fff;
  }

  .inner-badge {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
  }

  .badge-comment {
    text-align: center;
  }

  .game-detail {
    margin-left: 16px;
    margin-top: 16px;
  }

  .detail-label {
    color: #999999;
    font-size: 1em;
    font-weight: 400;
  }
</style>
