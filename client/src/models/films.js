var Film = require("./film.js");

var Films = function(){

  var film1 = new Film({
    title: "Homeland",
    review: 10,
    genre: "Mystery"
  });

  var film2 = new Film({
    title: "GOT",
    review: 7,
    genre: "Action"
  });

  return [film1, film2];
}

module.exports = Films;
