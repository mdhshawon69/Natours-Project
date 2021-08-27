exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'not created',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'not created',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'not created',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'not created',
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
    message: 'found',
  });
};
