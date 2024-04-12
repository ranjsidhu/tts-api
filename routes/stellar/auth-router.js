const authRouter = require("express").Router();

const {
  register,
  login,
  logout,
} = require("../../controllers/stellar/auth-controller");

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/logout").post(logout);

module.exports = authRouter;
