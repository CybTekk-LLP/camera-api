import { EmailService } from "@/application/services";
import { UserService } from "@/application/services/UserService";
import { Request, Response } from "express";
export class EmailController {
  constructor(
    private emailService: EmailService,
    private userService: UserService
  ) {
    this.emailService = emailService;
    this.userService = userService;
  }
  
  sendEmail = async (req: Request, res: Response) => {
    const email = req.query.email.toString();
    const imageURL = req.query.imageUrl.toString();
    await this.userService.createUser(email, imageURL);
    await this.emailService.sendEmail(email, imageURL);
    res.status(200).send("Email sent successfully");
  };
}
