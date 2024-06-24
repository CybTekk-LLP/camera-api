import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const {
  PORT,
  DATABASE_URL,
  ENV,
  JWT_SECRET,
  STRIPE_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  PAYMENT_SUCCESS_REDIRECT,
  PAYMENT_CANCEL_REDIRECT,
  UPLOADS_PATH,
  ALLOWED_ORIGINS,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  NODEMAILER_EMAIL,
  NODEMAILER_PASSWORD,
  PUBLIC_BASE_URI,
} = process.env;
