const { checkUser, setTokenLogin } = require("../../services/auth");

const { createError } = require("../../helpers");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await checkUser(email);
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!user || !user.verify || !passCompare) {
    throw createError(
      401,
      `Email is wrong or not verify, or password is wrong`
    );
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await setTokenLogin(user._id, token);
  res.status(200);
  res.json({ message: "Success", data: { token } });
};

module.exports = login;
