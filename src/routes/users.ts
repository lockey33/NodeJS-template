import express from "express";
import * as userController from "../controllers/users.controller";

const router = express.Router();

router.get("/users/", userController.get);
router.post("/users/", userController.create);
router.delete("/users/", userController.remove);

export default router;
