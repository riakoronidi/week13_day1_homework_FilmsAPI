var express = require('express');
var filmRouter = new express.Router();
var films = [["Homeland", 10], ["Game of Thrones", 10]];

filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]});
})

filmRouter.get('/', function(req, res){
  res.json(films);
})

// add a new film in insomnia like {"film": ["Picky Blinders", 4]}
filmRouter.post('/', function(req, res){
  films.push(req.body.film);
  res.json({data: films});
})

filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
})

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
})

module.exports = filmRouter;
