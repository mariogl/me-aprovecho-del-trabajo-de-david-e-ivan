import App from "./components/App/App.js";
import FilmCard from "./components/FilmCard/FilmCard.js";
import series from "./ts/films.js";

new App("My Series");
new FilmCard(document.body, series[0]);

