/* globals module require */

const SimpleMovie = require("./simple-movie-model");
const FullMovie = require("./full-movie-model");

module.exports = {
    getSimpleMovie(name, url) {
        return SimpleMovie.getSimpleMovieByNameAndUrl(name, url);
    },
    insertManySimpleMovies(movies) {
        SimpleMovie.insertMany(movies);
    },
    getFullMovie(coverImage, trailer, title, description, categories, releaseDate, actors) {
        let movieObject = {
            coverImage,
            trailer,
            title,
            description,
            categories,
            releaseDate,
            actors
        };

        return new FullMovie(movieObject);
    },
    insertManyFullMovies(movies) {
        FullMovie.insertMany(movies);
    }
};