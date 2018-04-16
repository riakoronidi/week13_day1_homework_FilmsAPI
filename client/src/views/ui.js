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

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(films) {
    var container = document.getElementById("films");

    for(var film of films) {
      var li = document.createElement("li");
      this.appendText(li, film.title, "Film: ");
      // var li1 = document.createElement("li");
      // this.appendText(li1, film.review, "Review: ");
      // var li2 = document.createElement("li");
      // this.appendText(li2, film.genre, "Genre: ");

      container.appendChild(li);
      // container.appendChild(li1);
      // container.appendChild(li2);
    }
  }
}

module.exports = UI;
