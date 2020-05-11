<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item :key="link.text" v-for="(link) in links" router :to="link.route" @click="drawer=false">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="success"
      light
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title class="white--text font-weight-light center">MOVIE</v-toolbar-title>
      <v-toolbar-title class="white--text font-weight-bold">VUER</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      selectedGenre: '',
      links: [
        { icon: 'mdi-thumb-up-outline', text: 'Popular Movies', route: '/popular'} ,
        { icon: 'mdi-skip-forward-outline', text: 'Upcoming Movies', route: '/upcoming'},
        { icon: 'mdi-drama-masks', text: 'Browse by Genre', route: '/genre'},
        { icon: 'mdi-information-outline', text: 'About', route: '/about'},
      ],
      drawer: false,
    };
  },
  mounted() {
    this.$store.dispatch('getGenres');
  },
  props:
    ['source'],
  computed: {
    ...mapState([
      'genres',
    ]),
  },
};
</script>
