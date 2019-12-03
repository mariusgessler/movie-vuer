import PopularMovies from "./components/Movies/PopularMovies";
import UpcomingMovies from "./components/Movies/UpcomingMovies";
import GenreMovies from "./components/Movies/GenreMovies";
import About from "./components/About";

export const routes = [
    {path: "/", component: PopularMovies},
    {path: "/upcoming", component: UpcomingMovies},
    {path:"/genre", component: GenreMovies},
    {path:"/about", component: About}
];