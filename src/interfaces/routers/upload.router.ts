import {
  uplaodVideo,
  uploadGallery,
  uploadImage,
  uploadPdfFile,
} from "@/application/services";
import { Router } from "express";
import { UploadsController } from "../controllers";

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
router
  .route("/files")
  .post(uploadPdfFile.single("file"), uploadController.handleNewFileUpload);
router
  .route("/videos")
  .post(uplaodVideo.single("video"), uploadController.handleNewVideoUpload);

export default router;
