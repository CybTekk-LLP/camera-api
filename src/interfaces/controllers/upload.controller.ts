import { Request, Response } from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {
  AWS_S3_BUCKET_REGION,
  AWS_S3_BUCKET_ACCESS_KEY,
  AWS_S3_BUCKET_ACCESS_SECRET,
  AWS_S3_BUCKET_NAME,
} from "@/config/env.config";

export const s3 = new S3Client({
  region: AWS_S3_BUCKET_REGION,
  credentials: {
    accessKeyId: AWS_S3_BUCKET_ACCESS_KEY,
    secretAccessKey: AWS_S3_BUCKET_ACCESS_SECRET,
  },
});

export class UploadsController {
  handleGalleryUpload = async (req: Request, res: Response) => {
    const urls = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!req.files) throw new Error("400::no file attached");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const file of req.files) {
      urls.push(`/api/uploads/gallery/${file.filename}`);
      const command = new PutObjectCommand({
        Bucket: AWS_S3_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
      });
      await s3.send(command)
    }
    // @ts-ignore
    console.log(req.files);
    const params = {
      Bucket: AWS_S3_BUCKET_NAME,
    };

    res.json({ uri: urls });
  };
}
