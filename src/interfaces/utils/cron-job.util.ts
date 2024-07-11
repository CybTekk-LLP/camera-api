import { EmailService } from "@/application/services";
import cron from "node-cron"; // Import your email service

export const startEmailCronJob = (
  emailService: EmailService,
  email: string,
  imageURL: string
) => {
  // Schedule the email to be sent every 10 seconds
  cron.schedule(
    "*/10 * * * * *",
    async () => {
      await emailService.sendEmail(email, imageURL);
      console.log("Email sent");
    },
    {
      scheduled: true,
      timezone: "UTC",
    }
  );
};
