//  + - in front of prompt - converts entered data to numbers type
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How much films have you already watched?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much films have you already watched?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function rememberMyFilms() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}
// rememberMyFilms();

const questionAmount = 2;

function detectPersonalLevel() {
  for (let i = 0; i < questionAmount; i++) {
    let a = prompt("One of your last watched films?", "");
    let b = prompt("How would you rate the movie?", "");

    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
// detectPersonalLevel();

function showMyDB(data) {
  if (!data) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourCenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Your favorite genre number ${i}?`);
    personalMovieDB.genres.push(genre);
  }
}
// writeYourCenres();
