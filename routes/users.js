exports.allUser = (req, res) => {
  res.status(200).json({
    data: [{
      username: 'sohel123',
    }, {
      username: 'user123',
    }],
  });
};
