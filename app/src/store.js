import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '85c2a7cfb3c501f6918366050b39a378';

export default new Vuex.Store({
  state: {
    popularMovies: [],
    upcomingMovies: [],
    genreMovies: [],
    genres: [],
  },
  actions: {
    getMovies({ commit }, [category, page]) {
      fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          const movies = data;
          if (category == 'popular') {
            commit('SET_POPULAR', movies);
          } else if (category == 'upcoming') {
            commit('SET_UPCOMING', movies);
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert(error);
        });
    },
    getMovieByGenre({ commit }, [genre, page]) {
      fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}&page=${page}`)
        .then((response) => response.json())

        .then((data) => {
          const genreMovies = data;
          commit('SET_MOVIE_BY_GENRE', genreMovies);
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert(error);
        });
    },
    getGenres({ commit }) {
      fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then((response) => response.json())
        .then((data) => {
          const { genres } = data;
          commit('SET_GENRE', genres);
        })
        .catch((error) => {
          // eslint-disable-next-line no-alert
          alert(error);
        });
    },
  },
  mutations: {
    SET_POPULAR(state, movies) {
      state.popularMovies = movies;
    },
    SET_UPCOMING(state, movies) {
      state.upcomingMovies = movies;
    },
    SET_MOVIE_BY_GENRE(state, genreMovies) {
      state.genreMovies = genreMovies;
    },
    SET_GENRE(state, genres) {
      state.genres = genres;
    },
  },
});
