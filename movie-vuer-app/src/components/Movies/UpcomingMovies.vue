<template>
    <div class="upcoming">
        <h1 class="headline font-weight-light">Upcoming Movies</h1>
        <mvMovieList/>
        <mvPagination :v-model="page" :totalNumOfPages="upcomingMovies.total_pages" :requestingComponent="this.$route.path"/>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
        data(){
            return {
            page: 1
            };
        },
        computed: {
            ...mapState([
                "upcomingMovies"
            ])
        }
        
}
</script>