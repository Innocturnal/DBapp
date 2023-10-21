"use strict";

let lastFilm;
let lastMark;

// function start() {
//   do {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "20");
//   } while (
//     numberOfFilms == "" ||
//     numberOfFilms == null ||
//     isNaN(numberOfFilms)
//   );
// }

// start();

const personaMovieDB = {
  count: 0, // КАКОГО ХУЯ?
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  askCount: function (checkMovies) {
    do {
      personaMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "20");
    } while (
      personaMovieDB.count == "" ||
      personaMovieDB.count == null ||
      isNaN(personaMovieDB.count)
    );
    checkMovies(personaMovieDB.count);
    // перекидывается значение в count
  },
  showMyDB: function (status) {
    if (status === false) {
      console.log(personaMovieDB);
    }
  },
  checkCount: function (countOfMovies) {
    if (countOfMovies > 0 && countOfMovies <= 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (countOfMovies > 10 && countOfMovies <= 30) {
      alert("Вы рядовой зритель");
    } else if (countOfMovies > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  askFilm: function () {
    let i = 0;
    do {
      lastFilm = prompt("Какой последний фильм вы посмотрели?", "Ohota");
      lastMark = +prompt("На сколько оцените его?", "8.1");
      if (
        lastFilm != "" &&
        lastFilm != null &&
        lastMark != "" &&
        lastMark != null
      ) {
        personaMovieDB.movies[lastFilm] = lastMark;
        i++;
      } else {
        console.log("error");
        i--;
      }
    } while (i < personaMovieDB.count);
  },
  askGenres: function () {
    let i = 0;
    do {
      let lastGenre;
      lastGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "Action");
      if (lastGenre !== "" && lastGenre !== null) {
        personaMovieDB.genres[i] = lastGenre;
        i++;
      }
    } while (i < 2);
  },
  toggleVisibilityDB: function () {
    switch (this.privat) {
      case false:
        this.privat = true;
        break;
      case true:
        this.privat = false;
        break;
    }
  },
  checkGenres: function () {
    this.genres.forEach(function (currentValue, index, arr) {
      console.log(
        `Ваш любимый жанр под номером ${index + 1} - это ${currentValue}`
      );
    });
  },
};

personaMovieDB.askCount(personaMovieDB.checkCount); // записываем значение в count для объекта

// function checkCountOfMovies(countOfMovies) {
//   if (countOfMovies > 0 && countOfMovies <= 10) {
//     alert("Просмотрено довольно мало фильмов");
//   } else if (countOfMovies > 10 && countOfMovies <= 30) {
//     alert("Вы рядовой зритель");
//   } else if (countOfMovies > 30) {
//     alert("Вы киноман");
//   } else {
//     alert("Произошла ошибка");
//   }
// }

// function showMyDB(status) {
//   if (status === false) {
//     console.log(personaMovieDB);
//   }
// }

personaMovieDB.showMyDB(personaMovieDB.privat);

// function askFilm() {
//   let i = 0;
//   do {
//     lastFilm = prompt("Какой последний фильм вы посмотрели?", "Ohota");
//     lastMark = +prompt("На сколько оцените его?", "8.1");
//     if (
//       lastFilm != "" &&
//       lastFilm != null &&
//       lastMark != "" &&
//       lastMark != null
//     ) {
//       personaMovieDB.movies[lastFilm] = lastMark;
//       i++;
//     } else {
//       console.log("error");
//       i--;
//     }
//   } while (i < personaMovieDB.count);
// }

// function askGenres() {
//   for (let i = 0; i < 2; i++) {
//     personaMovieDB.genres[i] = prompt(
//       `Ваш любимый жанр под номером ${i + 1}`,
//       "Jopa"
//     );
//   }
// }

personaMovieDB.askFilm();

// askFilm();
// askGenres();

personaMovieDB.askGenres(personaMovieDB.checkGengres);
personaMovieDB.checkGenres();
personaMovieDB.toggleVisibilityDB();
