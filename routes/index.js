var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Paul',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Jones',
    added: new Date(),
  },
  {
    text: 'Glad to be here!!',
    user: 'Anna',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Chat with us!', messages });
});

router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
