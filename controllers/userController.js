const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res) => {
  const allUsers = await User.find({});

  //Sending Response:
  res.status(200).json({
    status: 'success',
    result: allUsers.length,
    data: {
      allUsers,
    },
  });
});

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
