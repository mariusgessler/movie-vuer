import Home from './components/Home';
import PopularMovies from './components/Movies/PopularMovies';
import UpcomingMovies from './components/Movies/UpcomingMovies';
import RandomMovie from './components/Movies/RandomMovie';

export const routes = [
    {path: '/', component: Home},
    {path: '/popular', component: PopularMovies},
    {path: '/upcoming', component: UpcomingMovies},
    {path:'/random', component: RandomMovie}
];