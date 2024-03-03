const getCurrent = async (req, res) => {
  const { email } = req.user;
  res.json({
    status: "seccess",
    code: 200,
    data: { user: { email: email, subscription: "starter" } },
  });
};

module.exports = getCurrent;
