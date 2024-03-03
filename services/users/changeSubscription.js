const { User } = require("../../models");

const { tryCatchWrapper } = require("../../helpers");

const changeSubscription = async (id, subscription) => {
  const data = await tryCatchWrapper(
    User.findByIdAndUpdate(id, subscription, {
      new: true,
    })
  );
  return data;
};

module.exports = changeSubscription;
