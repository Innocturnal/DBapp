"use strict";

let numberOfFilms;
let lastFilm;
let lastMark;

do {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "20");
} while (
  numberOfFilms == "" ||
  numberOfFilms == null ||
  numberOfFilms.length > 50
);

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

function askFilm() {
  for (let i = 0; i < 3; i++) {
    lastFilm = prompt("Какой последний фильм вы посмотрели?", "Ohota");
    lastMark = +prompt("На сколько оцените его?", "8.1");
    personaMovieDB.movies[lastFilm] = lastMark;
  }
}

askFilm();

console.log(personaMovieDB);
