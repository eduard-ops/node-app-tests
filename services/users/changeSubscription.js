const { User } = require("../../models");


const changeSubscription = async (id, subscription) => {
  const data = await User.findByIdAndUpdate(id, subscription, {
      new: true,
    })
  return data;
};

module.exports = changeSubscription;
