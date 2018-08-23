<template>
  <div>
    <c-header title="桌游怎么玩" :toggleMenu="toggleMenu"></c-header>
    <mt-index-list
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <mt-index-section v-bind:index="section.name" v-for="(section) in sections">
        <router-link v-bind:to="`/games/${game.id}`" v-for="game in section.games">
          <div class="game-item">
            <img src="../assets/caption.jpg" alt="" class="item-cover">
            <div class="item-title">{{game.name}}</div>
          </div>
        </router-link>
      </mt-index-section>
    </mt-index-list>
    <p v-show="loading" class="loading">
      <mt-spinner type="fading-circle" class="loading-spinner"></mt-spinner>
      加载中...
    </p>
  </div>
</template>

<script>
  export default {
    props: ['toggleMenu'],
    data() {
      return {
        loading: false,
        sections: [
          {
            name: 'A',
            games: [
              {id: 177736, name: '奥丁的盛宴', cover: ''},
              {id: 182874, name: '奥地利大酒店'},
            ]
          },
          {
            name: 'B',
            games: [
              {id: 171668, name: '步兵的恐惧'},
              {id: 231554, name: '本草'},
            ]
          },
          {
            name: 'C',
            games: [
              {id: 177736, name: '奥丁的盛宴'},
              {id: 182874, name: '奥地利大酒店'},
            ]
          },
          {
            name: 'D',
            games: [
              {id: 177736, name: '奥丁的盛宴'},
              {id: 182874, name: '奥地利大酒店'},
            ]
          },
          {
            name: 'E',
            games: [
              {id: 177736, name: '奥丁的盛宴'},
              {id: 182874, name: '奥地利大酒店'},
            ]
          },
        ],
      }
    },
    methods: {
      loadMore() {
        console.log('loadMore')
        this.loading = true
        // TODO
        setTimeout(() => {
          this.sections.push({
            name: 'F',
            games: [
              {id: 177736, name: '奥丁的盛宴2'},
              {id: 182874, name: '奥地利大酒店2'},
            ]
          })
          this.sections.push({
            name: 'G',
            games: [
              {id: 177736, name: '奥丁的盛宴3'},
              {id: 182874, name: '奥地利大酒店3'},
            ]
          })
          this.loading = false
        }, 5000)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loading {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }

  .loading-spinner {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }

  .game-item {
    position: relative;
  }

  .item-cover {
    height: 170px;
    width: 100%;
  }

  .item-title {
    position: absolute;
    width: 100%;
    color: #fff;
    text-align: center;
    background-color: #000;
    bottom: 0;
    padding: 10px;
    opacity: 0.6;
  }
</style>
