import { EmailService } from "@/application/services";
import { Request, Response } from "express";
export class EmailController {
  constructor(private emailService?: EmailService) {
    this.emailService = emailService;
  }
  sendEmail = async (req: Request, res: Response) => {
    const email = req.query.email.toString();
    const imageURL = req.query.imageUrl.toString();
    await this.emailService.sendEmail(email, imageURL);
    res.status(200).send("Email sent successfully");
  };
}
