<template>
<div class="text-center">
    <v-pagination
      v-model="page"
      :length="totalNumOfPages"
    >{{page}}</v-pagination>
  </div>
  </template>

<script>
import { eventBus } from "../eventBus"
export default {
    data() {
        return {
            page: 1,  
        };
    },
    props: 
        ["totalNumOfPages",
        "requestingComponent"],
    watch: {
       page: function (){
                if (this.requestingComponent === "/popular" ) {
                    this.$store.dispatch("getMovies",["popular", this.page])
                } else if (this.requestingComponent == "/upcoming"){
                    this.$store.dispatch("getMovies",["upcoming", this.page])
                } else {
                    eventBus.$on("genreChanged", page => {
                    this.page = 1
                 });
                    this.$store.dispatch("getMovieByGenre", [this.requestingComponent, this.page])
            };
        } 
    }    
};
</script>