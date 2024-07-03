import { EmailService } from "@/application/services";
import { Request, Response } from "express";
export class EmailController {
  constructor(private emailService?: EmailService) {
    this.emailService = emailService;
  }
  sendEmail = async (req: Request, res: Response) => {
    let email = req.query.email.toString();
    await this.emailService.sendEmail(email);
    res.status(200).send("Email sent successfully");
  };
}
