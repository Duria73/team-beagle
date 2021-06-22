const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  newProfile,
  editProfile,
  getProfile,
  findSitters,
} = require("../controllers/profile");

router.route("/new-profile").post(protect, newProfile);
router.route("/edit-profile/:id").patch(protect, editProfile);
router.route("/get-profile/:id").get(protect, getProfile);
router.route("/sitters").get(protect, findSitters);

module.exports = router;