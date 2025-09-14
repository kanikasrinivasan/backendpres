const mongoose = require('mongoose');
const User = require('../models/user');

// GET all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// UPDATE user
const updateuser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(404).json({ message: "Invalid user id" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// CREATE user
const createuser = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAllUsers,
  updateuser,   // ✅ now exported
  createuser
};
