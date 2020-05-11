<template>
  <v-layout >
    <v-container class="my-5">
      <v-row v-if="this.$route.path == '/popular'" justify="center"  >
        <v-col v-for="popularMovie in popularMovies.results" :key="popularMovie.id" cols="12" >
          <mvMovieCard  :movies="popularMovie"></mvMovieCard>
        </v-col>
      </v-row>
      <v-row v-else-if="this.$route.path =='/upcoming'" justify="center"  >
        <v-col v-for="upcomingMovie in upcomingMovies.results" :key="upcomingMovie.id"  cols="12"  >
         <mvMovieCard  :movies="upcomingMovie"></mvMovieCard>
        </v-col>
      </v-row>
      <v-row v-else-if="this.$route.path =='/genre'" justify="center"  >
        <v-col v-for="genreMovie in genreMovies.results" :key="genreMovie.id"  cols="12"  >
         <mvMovieCard  :movies="genreMovie"></mvMovieCard>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
import MovieCard from './MovieCard';

export default {
  beforeMount() {
    this.$store.dispatch('getMovies', ['popular', 1]);
    this.$store.dispatch('getMovies', ['upcoming', 1]);
  },
  components: {
    mvMovieCard: MovieCard,
  },
  props:
      ['selectedGenre'],
  computed: {
    ...mapState([
      'popularMovies',
    ]),
    ...mapState([
      'upcomingMovies',
    ]),
    ...mapState([
      'genreMovies',
    ]),

  },
};
</script>
