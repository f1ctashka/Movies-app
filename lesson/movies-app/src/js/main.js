import {getMovieDetails, getMovies, getMovieSearch} from "./api";

window.addEventListener('hashchange', e => {
  const {location: {hash}} = window;
  const [, movieId] = hash.split('=');

  // getMovieDetails(movieId, '.root');
  checkUrl()
})

document.getElementById('submitSearch').addEventListener('click', () => {
  window.location.hash = '#search=' + document.getElementById('search').value
  // searchMovie(searchInput.value, '.root');
})

const checkUrl = () => {
  const {location: {hash}} = window;
  const [hashName, movieId] = hash.split('=');

  if(hashName === '#movieId') {
    getMovieDetails(movieId, '.root');
  } else if(hashName === '#search') {
    getMovieSearch(`/search/movie?query=${movieId}`, '.root')
  } else {
    getMovies('popular', '.root');
  }
}

checkUrl();
