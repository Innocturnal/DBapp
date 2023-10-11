"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "20");
let lastFilm;
let lastMark;

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function askFilm() {
  lastFilm = prompt("Какой последний фильм вы посмотрели?", "Ohota");
  lastMark = +prompt("На сколько оцените его?", "8.1");
  personaMovieDB.movies[lastFilm] = lastMark;
}

askFilm();
askFilm();

console.log(personaMovieDB);
