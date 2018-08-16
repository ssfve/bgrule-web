<template>
  <div>
    <mt-index-list>
      <mt-index-section v-bind:index="section.name" v-for="(section) in sections">
        <router-link v-bind:to="`/games/${game.id}`" v-for="game in section.games">
          <mt-cell v-bind:title="game.name"></mt-cell>
        </router-link>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>s

<script>
  export default {
    data() {
      return {
        sections: [
          {
            name: 'A',
            games: [
              {id: 177736, name: '奥丁的盛宴'},
              {id: 182874, name: '奥地利大酒店'},
            ]
          },
          {
            name: 'B',
            games: [
              {id: 171668, name: '步兵的恐惧'},
              {id: 231554, name: '本草'},
            ]
          }
        ]
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
