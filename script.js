//  + - in front of prompt - converts entered data to numbers type

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt(
      "How much films have you already watched?",
      ""
    );

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt(
        "How much films have you already watched?",
        ""
      );
    }
  },
  rememberMyFilms: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  detectPersonalLevel: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("One of your last watched films?", "");
      let b = prompt("How would you rate the movie?", "");

      if (a != "" && b != "" && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  showMyDB: function (data) {
    if (!data) {
      console.log(personalMovieDB);
    }
    // personalMovieDB.privat - data
  },
  writeYourCenres: function () {
    // for (let i = 1; i <= 3; i++) {
    //   let genre = prompt(`Your favorite genre number ${i}?`);

    //   if (genre === null || genre === "") {
    //     i--;
    //   } else {
    //     personalMovieDB.genres.push(genre);
    //   }
    // }

    for (let i = 1; i < 2; i++) {
      let genres = prompt(
        `Введите ваши любимые жанры через запятую`
      ).toLowerCase();
      if (genres === null || genres === "") {
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Your favorite genre ${i + 1} is ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB);
