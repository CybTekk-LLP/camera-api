import { Router } from "express";
import { EmailController } from "../controllers/email.controller";
import { EmailService } from "@/application/services";
import { UserService } from "@/application/services/UserService";
import { getRepository } from "@/infrastructure";
import { User } from "@/domain/entities";

const router = Router();

const userRepository = getRepository(User);
const emailService = new EmailService();
const userService = new UserService(userRepository);
const emailController = new EmailController(emailService, userService);

router.route("/").post(emailController.sendEmail);

export default router;
