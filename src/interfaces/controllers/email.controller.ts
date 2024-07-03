import { EmailService } from "@/application/services";
import { Request, Response } from "express";
export class EmailController {
  constructor(private emailService?: EmailService) {
    this.emailService = emailService;
  }
  sendEmail = async (req: Request, res: Response) => {
    console.log(req.body);
    let email = req.query.email.toString();
    // let imageURL =
    //   "https://d3k81ch9hvuctc.cloudfront.net/company/TWnsJV/images/2dec6305-bb5b-451c-a6da-382b6ba296b5.jpeg";
    // await this.emailService.sendEmail(email, imageURL);
    res.status(200).send("Email sent successfully");
  };
}
