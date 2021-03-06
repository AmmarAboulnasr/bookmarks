var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var links = [
  { title: 'Fake link 1', url: 'fake.url.1' },
  { title: 'Fake link 2', url: 'fake.url.2' },
  { title: 'Fake link 3', url: 'fake.url.3' },
];

router.get('/api/links', function(req, res, next) {
  res.json({ links: links });
});

router.post('/api/links', function(req, res, next) {
  var newLink = req.body;
  links.push(newLink);
  res.json(newLink);
});

module.exports = router;
