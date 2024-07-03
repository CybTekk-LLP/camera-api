import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const {
  PORT,
  ENV,
  AWS_S3_BUCKET_ACCESS_SECRET,
  AWS_S3_BUCKET_ACCESS_KEY,
  AWS_S3_BUCKET_REGION,
  AWS_S3_BUCKET_NAME,
  UPLOADS_PATH,
  ALLOWED_ORIGINS,
  NODEMAILER_EMAIL,
  NODEMAILER_PASSWORD,
  PUBLIC_BASE_URI,
  KLAVIYO_PRIVATE_API_KEY,
} = process.env;
