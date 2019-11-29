import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store';
import { routes } from './routes';
import MovieList from './components/Movies/MovieList';
import vuetify from './plugins/vuetify';


Vue.use(VueRouter);
Vue.component("mvMovieList", MovieList);


const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
