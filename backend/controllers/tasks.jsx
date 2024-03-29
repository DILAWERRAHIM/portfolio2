const { asyncWrapper } = require("../config.js");
const { username, recommendations } = require("../models/schemas.jsx");

//  creates username collections

const Create_Username = asyncWrapper(async (req, res) => {
  try {
    const NewUser = await username.create(req.body);

    res.status(200).json({ NewUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
//creates recommendations collections
const Create_recommendations = asyncWrapper(async (req, res) => {
  try {
    const Task = await recommendations.create(req.body);
    res.status(200).json(Task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
// get all user data

const getAllUser = asyncWrapper(async (req, res) => {
  try {
    const tasks = await username.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//get single user
const getSingeUser = asyncWrapper(async (req, res) => {
  const { name, password } = req.params;

  try {
    const tasks = await username.findOne({
      username: name,
      password: password,
    });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//   get all recommendations data

const getAll_recommendations = asyncWrapper(async (req, res) => {
  try {
    const tasks = await recommendations.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

const getSingle_recommendations = asyncWrapper(async (req, res) => {
  const {id}=req.params
  try {
    const tasks = await recommendations.findOne({_id:id});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});



const Edit_recommendations = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await recommendations.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true },
    );
    if (!tasks) {
      return res.status(400).send(`product with id : ${id} not found `);
    }
    const updated_product = await recommendations.find({});
    res.status(200).json(updated_product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
const delete_recommendations = asyncWrapper(async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await recommendations.findByIdAndDelete(id);
    if (!tasks) {
      return res.status(400).send(`username with id not found`);
    }
    const updatedRecommendations = await recommendations.find();
    res.status(200).json(updatedRecommendations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// delete user
const delete_user = asyncWrapper(async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await username.findByIdAndDelete(id);
    if (!tasks) {
      return res.status(400).send(`username with id not found`);
    }
    const updated_username = await username.find();
    res.status(200).json(updated_username);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = {
  Create_Username,
  Create_recommendations,
  getAllUser,
  getAll_recommendations,
  delete_recommendations,
  delete_user,
  getSingeUser,
  getSingle_recommendations,
  Edit_recommendations
};
