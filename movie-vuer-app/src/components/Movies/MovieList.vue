<template>
    <v-layout >
        <v-container class="my-5">
            <v-row v-if="this.$route.path == '/popular'" justify="center"  >
                <v-col v-for="popularMovie in popularMovies" :key="popularMovie.id" cols="12" >
                    <mvMovieCard  :movies="popularMovie"></mvMovieCard>
                </v-col>
            </v-row>
            <v-row v-else justify="center"  >
                <v-col v-for="upcomingMovie in upcomingMovies" :key="upcomingMovie.id"  cols="12"  >
                    <mvMovieCard  :movies="upcomingMovie"></mvMovieCard>
                </v-col>
            </v-row>
        </v-container>
</v-layout>
   
</template>

<script>
import MovieCard from './MovieCard';
import { mapState } from 'vuex';

export default {
    mounted() {
        this.$store.dispatch('getMovies', ["popular",1])
        this.$store.dispatch('getMovies',["upcoming",1])
    },
    components: {
        mvMovieCard: MovieCard
    },
   
    computed: {
        ...mapState([
            'popularMovies'
        ]),
        ...mapState([
            'upcomingMovies'
        ]),
       
    },
    data(){
        return {
          
        };
    },

};
</script>