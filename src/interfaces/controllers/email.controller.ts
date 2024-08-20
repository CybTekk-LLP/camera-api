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
    const name = req.query?.name.toString();
    const imageURL = req.query.imageurl.toString();

    await this.userService.createUser(email, imageURL); //this create user-image

    const images = await this.userService.getExtractedImages(email);
    await this.emailService.sendEmail(email, name, images);
    res.status(200).json(images);
  };
}
