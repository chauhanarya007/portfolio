var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

//Get / about
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me',
    content: 'A short description of me'
  })
})


module.exports = router;
