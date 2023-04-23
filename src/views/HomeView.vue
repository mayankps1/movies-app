<template>
  <b-container>
    <b-row align-v="center">
      <movie-card v-for=" movie  in  displayMovies " 
      :key=" movie.id " 
      :title=" movie.title " 
      :poster=" movie.poster "
      :overview=" movie.overview " 
      :genres=" movie.genres "
      ></movie-card>
    </b-row>

    <b-pagination v-model=" currentPage " 
    :total-rows=" rows " 
    :per-page=" perPage " 
    first-text="First" 
    prev-text="Prev"
    next-text="Next" 
    last-text="Last" 
    @input=" paginate( currentPage ) " 
    class="mt-3 justify-content-center"
    list-class="justify-content-center pagination-sm"
    ></b-pagination>

  </b-container>
</template>

<script>

import MovieCard from "@/components/MovieCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {
    "movie-card": MovieCard,
  },
  computed: {
    ...mapGetters( [ "movies", "displayMovies", "rows" ] )
  },
  mounted ()
  {
    this.fetchData();
  },
  data ()
  {
    return {


      currentPage: 1,

      perPage: 3
};
  },
  methods: {

    async fetchData ()
    {
      await this.$store.dispatch( "fetchMovies" )
      console.log( 'test', this.$store.getters.movies );
    },
    paginate ( currentPage )
    {

      this.$store.dispatch( "paginate", { currentPage, perPage: this.perPage } );
    }
},
};
</script>
<style></style>

