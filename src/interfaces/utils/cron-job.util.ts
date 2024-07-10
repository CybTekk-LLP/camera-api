import { EmailService } from "@/application/services";
import cron from "node-cron";
const emailService = new EmailService();

export function initCronSchedule() {
  cron.schedule("*/10 * * * * *", emailService.sendEmail); //For every  1at 00:00
}
