import { Router } from "express";
import { UploadsController } from "../controllers";
import { uploadGallery, uploadImage } from "@/application/services";

const router = Router();

const uploadController = new UploadsController();

router
  .route("/images")
  .post(uploadImage.single("image"), uploadController.handleNewImageUpload);

router
  .route("/gallery")
  .post(
    uploadGallery.array("gallery", 10),
    uploadController.handleGalleryUpload
  );

export default router;
