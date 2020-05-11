import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import { routes } from './routes';
import MovieList from './components/Movies/MovieList';
import Pagination from './components/Pagination';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
Vue.component('mvMovieList', MovieList);
Vue.component('mvPagination', Pagination);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
