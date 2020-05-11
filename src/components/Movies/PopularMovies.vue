<template>
    <div class="popular">
        <h1 class="headline font-weight-light">Popular Movies</h1>
        <mvMovieList/>
        <mvPagination
          :page="page"
          :totalNumOfPages="popularMovies.total_pages"
          :requestingComponent="this.$route.path" />
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapState([
      'popularMovies',
    ]),
  },
};
</script>
