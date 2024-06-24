import multer from "multer";
import path from "path";
import { PathLike } from "fs";
import { promises as fs } from "fs";
import {
  AWS_S3_BUCKET_ACCESS_KEY,
  AWS_S3_BUCKET_ACCESS_SECRET,
  AWS_S3_BUCKET_REGION,
  UPLOADS_PATH,
} from "@/config";


async function createDirIfNotExists(directory: PathLike) {
  fs.access(directory).catch(() => {
    fs.mkdir(directory, { recursive: true });
  });
}

const imagesPath = path.resolve(UPLOADS_PATH, "./images");
const galleryPath = path.resolve(UPLOADS_PATH, "./gallery");

createDirIfNotExists(imagesPath);

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesPath);
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + "_" + file.originalname);
  },
});

const galleryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, galleryPath);
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
function ensureIsSupported(file: any, cb: any, fileTypes: RegExp) {
  const extension = fileTypes.test(path.extname(file.originalname));
  if (extension) {
    return cb(null, true);
  } else {
    cb("Not Supported");
  }
}
export const uploadImage = multer({
  dest: imagesPath,
  storage: imageStorage,
  fileFilter: function (req, file, cb) {
    ensureIsSupported(file, cb, /jpg|jpeg|png|heic|webp/);
  },
});
export const uploadGallery = multer({
  dest: galleryPath,
  storage: galleryStorage,
  fileFilter: function (req, file, cb) {
    ensureIsSupported(file, cb, /jpg|jpeg|png|heic|webp/);
  },
});
