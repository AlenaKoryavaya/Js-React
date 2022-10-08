const numberOfFilms = +prompt("How much films have you already watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of your last watched films?", ""),
  b = prompt("How would you rate the movie?", ""),
  c = prompt("One of your last watched films?", ""),
  d = prompt("How would you rate the movie?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
