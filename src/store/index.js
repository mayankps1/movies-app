import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    displayMovies: [],
    rows: 0,
  },

  
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_MOVIES(state, displayMovies) {
      state.displayMovies = displayMovies;
    }
  },
  getters: {
    movies(state) {
      return state.movies;
    },
    rows(state) {
      return state.rows;
    },
    displayMovies(state) {
      return state.displayMovies;
    },
  },
  actions: {
    async fetchData() {      
      return new Promise(resolve  =>{
        setTimeout( async () =>
        {
          
          const res = await fetch( "movies.json" );
          const val = await res.json();
          resolve( val );
        }, 1000 );
      });
    },
    async fetchMovies({ dispatch,commit }) {
      const myJson = await dispatch( "fetchData" );
      commit( "SET_MOVIES", myJson );
      commit("SET_ROWS", myJson.length)
      const displayMovies = myJson.slice( 0, 8 );
      commit("SET_DISPLAY_MOVIES",displayMovies)
      commit("SET_ROWS",myJson.length)
    },

    async paginate ( { commit, state }, { currentPage, perPage } )
    {
      console.log( perPage );
      console.log( currentPage );
      const start = (currentPage - 1) * perPage;
      const movies = state.movies.slice(start, start + 8); 
      commit("SET_DISPLAY_MOVIES", movies);
    },

  updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) { 
      commit("SET_MOVIES", myJson);
      commit("SET_ROWS", myJson.length);
    dispatch("paginate", { currentPage, perPage }); 
   },


    async search({ dispatch}, { text }) {
      const myJson = await this.dispatch("fetchData");
      const values = myJson.filter ( val =>
      
       val.title.toLowerCase().includes( text.toLowerCase() )
      );
 dispatch( "updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 8
      } ); 
    },
   

  },
  modules: {},
});
//please solve this problem seach is not working properly