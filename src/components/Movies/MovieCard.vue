<template>
          <v-card
            max-width="600px"
            light
          >
            <div class="d-flex flex-no-wrap justify-space-between mobile-card" >
              <div class="info-container"> 
                  <div>
                    <v-card-title
                    class="headline "
                    v-text="movies.title"
                    ></v-card-title>
                    <v-card-subtitle class="overline "  v-text="'Rating:' + movies.vote_average + '/10'" />
                    </div>
        
                    <v-card-subtitle class="pt-0"  v-text="movies.overview" />
                <v-card-action>
                     <v-btn block  outline elevation text color="success" :href="moreInfoLink" >
                        More Info
                    </v-btn>
                </v-card-action>
              </div>

                <v-img :src="posterPath"  max-width="150px"></v-img>
            </div>
          </v-card>
             
</template>

<script>
import { mapState } from "vuex";
export default {
    props: ["movies"],
    data(){
        return {
        posterPath: `https://image.tmdb.org/t/p/w500/${this.movies.poster_path}`,
        moreInfoLink: `https://www.themoviedb.org/movie/${this.movies.id}`
        }
    },
    computed: {
        ...mapState([
            "genres"
        ]),
    }
};

</script>

<style>
.v-card {
    margin: 0 auto
}
.info-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

@media screen and (max-width: 500px) {
    .mobile-card{
        flex-direction: column-reverse;
    }

    .v-image {
        width: 100%;
        margin: 0 auto;
    }

}
</style>
