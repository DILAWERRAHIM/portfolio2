const express = require("express");
const router = express.Router();

const {
  Create_Username,
  Create_recommendations,
  getAllUser,
  getAll_recommendations,
  delete_recommendations,
  delete_user,
  getSingeUser,
  Edit_recommendations,
  getSingle_recommendations,
  Create_Hire,
  gethire,
} = require("../controllers/tasks.jsx");
// routes for hire form
router.route("/user/hire").post(Create_Hire).get(gethire);
//  routes for user
router.route("/user").get(getAllUser).post(Create_Username);
router.route("/user/Single/:name/:password").get(getSingeUser);
router.route("/user/:id").delete(delete_user);
//routes for recommendations
router
  .route("/user/recommendations")
  .get(getAll_recommendations)
  .post(Create_recommendations);
router
  .route("/user/recommendations/:id")
  .delete(delete_recommendations)
  .get(getSingle_recommendations)
  .put(Edit_recommendations);

module.exports = router;
