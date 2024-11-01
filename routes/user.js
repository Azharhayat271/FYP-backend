const express = require("express");
const authenticateJWT = require("../middleware/auth");

const {
  registerUser,
  verifyEmail,
  verifyEmailLink,
  login,
  forgotPassword,
  resetPassword,
  getAllUsers,
  updateUserById,
  deleteUserById,
  getUserById,
  getUserStatistics,
  loginUserViaGoogle,
  registerUserViaGoogle,
  sendOtp,
  changePassword
} = require("../controllers/user"); // Adjust the path as necessary

const router = express.Router();

router.post("/register", registerUser);
router.post("/verify-email", verifyEmail);
router.get("/verify-email", verifyEmailLink);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.put("/change-password/:userId", changePassword);

// router.get("/get-all-users", authenticateJWT, getAllUsers)
router.get("/get-all-users", getAllUsers);
router.put("/update-user/:userId", updateUserById);
router.delete("/delete-user/:userId", deleteUserById);
router.get("/get-user/:userId", getUserById);
router.get("/user-stats", getUserStatistics);
router.post("/loginwithgoogle", loginUserViaGoogle);
router.post("/registerwithgoogle", registerUserViaGoogle);
router.post("/send-otp", sendOtp);
module.exports = router;
