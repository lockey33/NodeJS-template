import { Request, Response } from "express";
import * as userService from "../services/users.service";

export const get = (async (req: Request, res: Response) => {
  try {
    const users = await userService.findUsers();
    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    return res.status(500).send(`error when fetching users : ${err}`);
  }
});

export const create = (async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const userExist = await userService.userExists(req.body.name);
    if (!userExist) {
      await userService.createUser(req.body.name);
      return res.status(200).send("User created");
    }
    return res.status(500).send("User already exist with this name !");
  } catch (err) {
    console.log(err);
    return res.status(500).send(`error when creating user : ${err}`);
  }
});

export const remove = (async (req: Request, res: Response) => {
  try {
    const { userIds } = req.body;
    const deletedUsers = await userService.deleteUsers(userIds);
    return res.status(200).send(`Deleted ${deletedUsers.deletedCount} users`);
  } catch (err) {
    console.log(err);
    return res.status(500).send(`error when deleting user(s) : ${err}`);
  }
});
