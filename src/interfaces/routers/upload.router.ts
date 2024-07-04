import { Router } from "express";
import { UploadsController } from "../controllers";
import { EmailService, uploadGallery } from "@/application/services";

const router = Router();
const emailService = new EmailService();
const uploadController = new UploadsController(emailService);

router
  .route("/gallery")
  .post(
    uploadGallery.array("gallery", 3),
    uploadController.handleGalleryUpload
  );
router.route("/images/email").post(uploadController.handleEmailImage);

export default router;
