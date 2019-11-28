<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Movie Vuer</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
       <router-link to="/popular" tag="li" activeClass="active">
         <a class="nav-link">Popular Movies</a>
        </router-link>
       <router-link to="/upcoming" tag="li" activeClass="active">
        <a class="nav-link">Upcoming Movies</a>
        </router-link>
       <router-link to="/random" tag="li" activeClass="active">
        <a class="nav-link">Random Movie</a>
        </router-link>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Genres
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a  class="dropdown-item" v-for="genre in genres" :key="genre"> {{ genre.name }}  </a>
        </div>
      </li>
    </ul>  
  </div>
  
</nav>

    </div>
    
</template>

<script>
import { mapState } from 'vuex';
export default {
  mounted(){
    this.$store.dispatch('getGenres');
  },
  
  computed: {
    ...mapState([
      'genres'
    ])
   
  }
}
</script>