const router = require('express').Router();

const { allUser } = require('./users');

router.get('/', (req, res) => {
  res.send('Index Route');
});

router.post('/users/all', allUser);

module.exports = router;
