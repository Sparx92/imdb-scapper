/* globals module require */

const SimpleMovie = require("./simple-movie-model");
const FullMovie = require("./full-movie-model");

const moviesToAdd = [];

// const insertManyFullMovies = (movies) => {
//     console.log("Saved movies");
//     FullMovie.insertMany(movies, (err) => {
//         console.log(err);
//     });
// };

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
    insertFullMovie(movie) {
        moviesToAdd.push(movie);
        movie.save();

        console.log(`Inserted movie ${movie.title}`);

        // if (moviesToAdd.length > 20) {
        //     insertManyFullMovies(moviesToAdd);
        //     moviesToAdd.splice(0, moviesToAdd.length);
        // }
    }
};