import { Router } from "express";
import { UserService } from "@/application/services/UserService";
import { getRepository } from "@/infrastructure";
import { User } from "@/domain/entities";
import { UserController } from "../controllers/user.controller";

const router = Router();

const userRepository = getRepository(User);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.route("/").get(userController.getUserImages);

export default router;
