"use strict";

let numberOfFilms;
let lastFilm;
let lastMark;

function start() {
  do {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "20");
  } while (
    numberOfFilms == "" ||
    numberOfFilms == null ||
    isNaN(numberOfFilms)
  );
}

start();

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personaMovieDB.count > 0 && personaMovieDB.count <= 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personaMovieDB.count > 10 && personaMovieDB.count <= 30) {
  alert("Вы рядовой зритель");
} else if (personaMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

function showMyDB(status) {
  if (status === false) {
    console.log(personaMovieDB);
  }
}

showMyDB(personaMovieDB.privat);

function askFilm() {
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
}

function askGenres() {
  for (let i = 0; i < 2; i++) {
    personaMovieDB.genres[i] = prompt(
      `Ваш любимый жанр под номером ${i+1}`,
      "Jopa"
    );
  }
}

askFilm();
askGenres();
