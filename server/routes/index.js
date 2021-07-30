var express = require('express');
const { auth } = require('../middlewares/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', auth, (req, res, next) => {
  res.json({ result: 'good!' });
});

module.exports = router;
