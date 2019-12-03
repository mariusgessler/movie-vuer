<template>
     <div class="popular">
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="5">
            <h1 class="headline font-weight-light">Browse by Genre</h1>
        </v-col>
         <v-col class="d-flex" cols="12" sm="2">
            <v-select 
                :items="genres"
                name="genre"
                v-model="selectedGenre"
                item-text="name"
                item-value="id"
                label="Select a Genre"
                color="light-green"

            ></v-select>
        </v-col>
      </v-row>
     <mvMovieList :selectedGenre="selectedGenre"/>
     <mvPagination :page="page" :totalNumOfPages="genreMovies.total_pages" :requestingComponent="this.selectedGenre"/>
    </div>
</template>

<script>
import { mapState } from "vuex"
import { eventBus } from "../../eventBus"
export default {
    data(){
        return{
        selectedGenre:"",
        page: 1
        }
    },
  
    watch: { 
        selectedGenre(newValue, oldValue){
            if (newValue != oldValue){
                this.page = 1
                 this.$store.dispatch("getMovieByGenre", [this.selectedGenre, 1])
                 eventBus.$emit("genreChanged", this.page)
            }
        }
    },
    computed: {
        ...mapState([
            "genres"
        ]),
        ...mapState([
            "genreMovies"
        ])
    },
}
</script>

<style>

</style>