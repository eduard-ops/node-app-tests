const { changeSubscription } = require("../../services/users");

const { createError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const result = await changeSubscription(_id, req.body);
  if (!result) {
    createError(401);
  }
  res.json({
    message: "updated",
    code: 200,
    data: { email: result.email, subscription: result.subscription },
  });
};

module.exports = updateSubscription;
