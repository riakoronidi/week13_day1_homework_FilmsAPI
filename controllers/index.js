var express = require('express');
var router = new express.Router();

router.use('/api/films', require('./films'));

router.get('/api', function(req, res){
  res.json({data: "This is my films app!"});
})

module.exports = router;
