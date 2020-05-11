import PopularMovies from './components/Movies/PopularMovies';
import UpcomingMovies from './components/Movies/UpcomingMovies';
import GenreMovies from './components/Movies/GenreMovies';
import About from './components/About';

export const routes = [
  { path: '/popular', component: PopularMovies },
  { path: '/upcoming', component: UpcomingMovies },
  { path: '/genre', component: GenreMovies },
  { path: '/about', component: About },
  { path: '/', redirect: '/popular' },
];
