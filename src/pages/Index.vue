<template>
  <Layout>
    <div class="mx-auto w-10/12 ">
      <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4" v-for="obj in gamesByYear" :key="obj.key" >
        <div class="text-center w-full col-span-full text-4xl text-yellow-500 font-extrabold tracking-">
          <h2 class="border-dotted border-purple-900 border-t-4 border-b-4 mb-5" :id="obj.key">
            <a :href="'#' + obj.key">{{obj.key}}</a>
          </h2>          
        </div>
        <game v-for="game in obj.items" :key="game.id" :game=game />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  games: allGames {
    edges {
      node {
        id
      	name
        score
        mainGenre
        subGenre
        mainTheme
        subTheme
        releaseDate {
          week
          month
          year
        }
        image
        text
      }
    }
  }
}
</page-query>


<script>
import Game from '../components/Game.vue'
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

export default {
  components: { Game },
  metaInfo: {
    title: 'Games'
  },
  computed: {
    gamesByYear() {
      let edges = JSON.parse(JSON.stringify(this.$page.games.edges));
      edges = map(edges, (edge) => edge.node);
      const res = groupBy(edges, (game) => game.releaseDate.year);
      let output = map(res, (value, key) => ({
        key: key,
        items: sortBy(value, (value) =>  value.releaseDate.month + value.releaseDate.week * 4)
      }));
      output = sortBy(output, (value) => value.key);  
      return output;
    }
  }
}
</script>
