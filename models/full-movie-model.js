/* globals require module */
"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let FullMovieSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
     coverImage: {
        type: String,
        required: true
    },
      trailer: {
        type: String,
        required: true
    }, 
     description: {
        type: String,
        required: true
    }, 
     categories:[ {
         category:{
        type: String,
        required: true
    }
    }],
      releaseDate: {
        type: Date,
        required: true
    },
  actors:[ {
        name:{  type: String,
        required: true}, 
        img:{  type: String,
        required: true},
        role:{  type: String,
        required: true},
        id:{  type: String,
        required: true}
    }]
});

mongoose.model("FullMovie", FullMovieSchema);
FullMovie = mongoose.model("SimpleMovie");
module.exports = FullMovie;