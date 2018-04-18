var express = require("express");
var router = express.Router();
var Book = require("../models").Book;

var dateFormat = require("dateFormat");

//books
var books = [
	{ id: 1,
    title: "Harry Potter and the Philosopher/'s Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    first_published: 1997
  },
  { id: 1,
    title: "Harry Potter and the Philosopher/'s Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    first_published: 1997
  },
];
/* GET all books */
router.get("/", function(req, res, next) {
  res.render("all-books", {} );
});

module.exports = router;
