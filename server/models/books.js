/**
 * File: books.js
 * Name: Saqib Hasan Siddiqi
 * Id: 301237796
 * Web App: Midterm- Book list
 */
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "Books"
});

module.exports = mongoose.model('Book', Book);
