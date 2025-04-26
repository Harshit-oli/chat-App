import express from "express";
import { allUsers, login, logout, SignUp } from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";
const router=express.Router();
router.route("/signUp").post(SignUp);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/allusers").get(secureRoute,allUsers);

export default router;