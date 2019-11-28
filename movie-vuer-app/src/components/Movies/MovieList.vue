<template>
    <div>
        <div v-if="this.$route.path == '/popular'">
            <h1>Popular Movies</h1>
            <mvMovieCard :key="popularMovie.id" v-for="popularMovie in popularMovies" :movies="popularMovie"></mvMovieCard>
        </div>
        
        <div v-else>
            <h1>Upcoming Movies</h1>
            <mvMovieCard :key="upcomingMovie.id" v-for="upcomingMovie in upcomingMovies" :movies="upcomingMovie"></mvMovieCard>
        </div>
        <ul>
      <li :key="genre" v-for="genre in genres">Fart: {{genre}}</li>
        </ul>
    </div>
</template>

<script>
import MovieCard from './MovieCard';
import { mapState } from 'vuex';

export default {
    mounted() {
        if (this.$route.path == "/popular"){
            this.$store.dispatch('getMovies', ["popular",1])
        }else if (this.$route.path == "/upcoming"){
            this.$store.dispatch('getMovies',["upcoming",1])
        }
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