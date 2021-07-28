var express = require('express');
var router = express.Router();

const client = require('../config/dbconfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin', async (req, res, next) => {
  console.log(req.body.profileObj.email);

  const db = (await client).db('social_login');
  const collection = db.collection('Users');
  const result = await collection.findOne({ email: req.body.profileObj.email }); // 해당 email로 db search
  
  if (result == null) await collection.insertOne(req.body.profileObj); // 없다면 db에 저장

  res.json(req.body);
});

module.exports = router;
