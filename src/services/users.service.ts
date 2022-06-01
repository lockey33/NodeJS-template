import User from "../models/user.schema";

export const findUsers = async () => User.find();

export const createUser = async (name: string) => {
  const user = User.create({ name, commissions: [] });
  return user;
};

export const userExists = async (name: string) => {
  const user = await User.findOne({ name });
  return !!user;
};

export const deleteUsers = async (userIds: []) => {
  const deletedUsers = await User.deleteMany({ _id: userIds });
  if (!deletedUsers) {
    throw new Error(("error on delete"));
  }
  return deletedUsers;
};
