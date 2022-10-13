var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arya Chauhan' });
});

//Get / about
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About Me',
    content: 'A short description of me.'
  })
})
//Get / contact
router.get('/contact', (req, res) => {
  res.render('contact', { 
    title: 'Contact Me',
    content: 'Contact me here.'
  })
})
//Get / project
router.get('/projects', (req, res) => {
  res.render('projects', { 
    title: 'Projects',
    content: 'Some Projects made by me.'
  })
})


module.exports = router;
