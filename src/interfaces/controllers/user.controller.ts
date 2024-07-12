import { UserService } from "@/application/services/UserService";
import { Request, Response } from "express";
export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  getUserImages = async (req: Request, res: Response) => {
    const email = req.query.email.toString();
    const images = await this.userService.getImagesByEmail(email);
    res.status(200).json(images);
  };

  getExtractedImages = async (req: Request, res: Response) => {
    const email = req.query.email.toString();
    const images = await this.userService.getImagesByEmail(email);
    images.forEach((item) => {
      if (typeof item.createdAt === "string") {
        item.createdAt = new Date(item.createdAt);
      }
    });

    const sortedData = images.sort((a, b) => {
      if (a.createdAt && b.createdAt) {
        return b.createdAt.getTime() - a.createdAt.getTime();
      }
      return 0;
    });

    const lastExtractedUsers = sortedData.slice(0, 2);
    const lastExtractedImages = lastExtractedUsers.map((entry) => entry.images);

    return res.status(200).json(lastExtractedImages);
  };
}
