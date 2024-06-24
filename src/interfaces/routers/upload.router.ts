import { Router } from "express";
import { UploadsController } from "../controllers";
import { uploadGallery } from "@/application/services";

const router = Router();

const uploadController = new UploadsController();

router
  .route("/gallery")
  .post(
    uploadGallery.array("gallery", 3),
    uploadController.handleGalleryUpload
  );

export default router;
