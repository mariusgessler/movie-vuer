import PopularMovies from './components/Movies/PopularMovies.vue';
import UpcomingMovies from './components/Movies/UpcomingMovies.vue';
import GenreMovies from './components/Movies/GenreMovies.vue';
import About from './components/About.vue';

export const routes = [
  { path: '/popular', component: PopularMovies },
  { path: '/upcoming', component: UpcomingMovies },
  { path: '/genre', component: GenreMovies },
  { path: '/about', component: About },
  { path: '/', redirect: '/popular' },
];
