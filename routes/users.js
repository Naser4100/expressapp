const router = require('express').Router();

router.get('/all', (req, res) => {
  res.status(200).json({
    data : [{
      username: 'sohel123',
    }, {
      username: 'user123',
    }],
  });
});

module.exports = router;
