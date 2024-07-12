import { UserService } from "@/application/services/UserService";
import { Request, Response } from "express";
export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  getUserImages = async (req: Request, res: Response) => {
    const email = req.query.email.toString();
    const user = await this.userService.getImagesByEmail(email);
    res.status(200).json(user);
  };
}
