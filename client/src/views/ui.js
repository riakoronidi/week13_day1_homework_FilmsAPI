var Films = require("../models/films.js");

var UI = function(){
  var films = new Films();
  this.render(films);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  // createLi: function(label, text){
  //   const li = document.createElement('li')
  //   li.innerText = `${label}: ${text}`
  //   return li
  // },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(films) {
    var container = document.getElementById("films");

    for(var film of films) {
      var liTitle = document.createElement("li");
      this.appendText(liTitle, film.title, "Film: ");
      var liReview = document.createElement("li");
      this.appendText(liReview, film.review, "Review: ");
      var liGenre = document.createElement("li");
      this.appendText(liGenre, film.genre, "Genre: ");

      container.appendChild(liTitle);
      container.appendChild(liReview);
      container.appendChild(liGenre);

    }
  }
}

module.exports = UI;
