import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_URL = 'https://api.themoviedb.org/3' ;
const API_KEY  = '85c2a7cfb3c501f6918366050b39a378' ; 

export default new Vuex.Store({
    state: {
        popularMovies:[],
        upcomingMovies:[]
    },
    actions: {
        getMovies({commit},[category, page]){
            fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`)
            .then(response => response.json())
            .then((data) => {
                let movies = data.results
                ;
                /* eslint-disable no-console */
                console.log(movies)
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
    },
    mutations: {
        SET_POPULAR (state,movies){
            state.popularMovies = movies
        },
        SET_UPCOMING (state,movies){
            state.upcomingMovies = movies
        }
    }

}) 