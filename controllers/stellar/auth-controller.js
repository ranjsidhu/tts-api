const { signUp, signIn, signOut } = require("../../models/stellar/auth-model");

exports.register = async (req, res) => {
  try {
    const data = await signUp(req.body);
    res
      .status(200)
      .send({ message: "Successfully created user", registered: true, data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const data = await signIn(req.body);
    res.status(200).send({ message: "Successfully logged in", data });
  } catch ({ message }) {
    res.status(500).send({ error: message });
  }
};

exports.logout = async (req, res) => {
  try {
    await signOut();
    res.status(200).send({ message: "Successfully logged out" });
  } catch ({ message }) {
    res.status(500).send({ error: message });
  }
};
