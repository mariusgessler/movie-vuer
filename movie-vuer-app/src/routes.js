import Home from './components/Home';
import PopularMovies from './components/Movies/PopularMovies';
import UpcomingMovies from './components/Movies/UpcomingMovies';
import GenreMovies from './components/Movies/GenreMovies';

export const routes = [
    {path: '/', component: Home},
    {path: '/popular', component: PopularMovies},
    {path: '/upcoming', component: UpcomingMovies},
    {path:'/genre', component: GenreMovies}
];