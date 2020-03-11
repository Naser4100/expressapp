const router = require('express').Router();

const users = require('./users');

router.get('/', (req, res) => {
  res.send('Index Route');
});

router.get('/users/all', (req, res) => {
  res.status(200).json({
    data : [{
      username: 'sohel123',
    }, {
      username: 'user123',
    }],
  });
});

module.exports = router;
