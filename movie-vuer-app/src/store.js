import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_URL = 'https://api.themoviedb.org/3' ;
const API_KEY  = '85c2a7cfb3c501f6918366050b39a378' ; 

export default new Vuex.Store({
    state: {
        popularMovies:[],
        upcomingMovies:[],
        genreMovies: [],
        genres:[]
    },
    actions: {
        getMovies({commit},[category, page]){
            fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(response => response.json())
            .then((data) => {
                const movies = data.results
                ;
                /* eslint-disable no-console */
                // console.log(movies)
                /* eslint-enable no-console */
                if (category == "popular"){
                    commit('SET_POPULAR', movies)
                }else if (category == "upcoming"){
                    commit('SET_UPCOMING', movies)
                }
            })
            .catch(error => {
                alert(error)
            })
        },
        getMovieByGenre({commit}, genre){
            fetch(`${BASE_URL}/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres${genre}`)
            .then(response => response.json())
            .then((data) => {
                const genreMovies = data.results;
                 /* eslint-disable no-console */
                //  console.log(genreMovies)
                 /* eslint-enable no-console */
                 commit('SET_MOVIE_BY_GENRE', genreMovies)
            })
            .catch(error => {
                alert(error)
            })
        },
        getGenres({commit}){
            fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then((data) => {
                const genres = data.genres
                 /* eslint-disable no-console */
                 console.log(genres)
                 /* eslint-enable no-console */
                commit("SET_GENRE", genres)
            })
            .catch(error => {
                alert(error)
            })

        }
    },
    mutations: {
        SET_POPULAR (state,movies){
            state.popularMovies = movies
        },
        SET_UPCOMING (state,movies){
            state.upcomingMovies = movies
        },

        SET_MOVIE_BY_GENRE(state,genreMovies){
            state.genreMovies = genreMovies
        },
        SET_GENRE(state, genres){
            state.genres = genres
        }
    }

}) 
// https://api.themoviedb.org/3/discover/movie?api_key=85c2a7cfb3c501f6918366050b39a378&language=en-US&sort_by=popularity.desc&with_genres=28