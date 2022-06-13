import fetchMovies from "./fetchMovies";
import loadPage from "./loadPage";
import MovieApiService from "./API";
import appendFilmsMarkup from "./appendFilmsMarkup";

const searchForm = document.querySelector(".input__wraper");
console.log(searchForm);
const searchBtn = document.querySelector(".input__search-btn");
console.log(searchBtn);
const filmsContainer = document.querySelector(".films__container");
console.log(filmsContainer);

const movieApiService = new MovieApiService();

// ====================================

searchForm.addEventListener("submit", onSearch);
function onSearch(e) {
  e.preventDefault();
  // searchQuery = e.currentTarget.elements.searchQuery.value;
  //   console.log(searchQuery);

  movieApiService.query = e.currentTarget.elements.searchQuery.value;
  console.log(movieApiService.query);
  movieApiService.resetPage();

  //   =====
  fetch(
    `https://api.themoviedb.org/3/movie/550/keywords?api_key=7cb8097836a7a1f4e5c19953961668c8&page=1`
  )
    .then(responce => responce.json())
    .then(data => console.log(data));
  // ====
  //   movieApiService.fetchMoviesBySearch().then(data => console.log(data));
}
