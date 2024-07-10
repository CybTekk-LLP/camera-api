import { Router } from "express";
import { EmailController } from "../controllers/email.controller";
import { EmailService } from "@/application/services";

const router = Router();

const emailService = new EmailService();
const emailController = new EmailController(emailService);

router.route("/").post(emailController.sendEmail);

export default router;
