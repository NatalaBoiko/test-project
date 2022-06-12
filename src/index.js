const API_KEY = `7cb8097836a7a1f4e5c19953961668c8`;

fetch(
  "https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query=Jack+Reacher"
).then(data => console.log(data));
