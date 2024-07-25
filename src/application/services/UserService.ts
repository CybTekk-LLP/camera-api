import { User } from "@/domain/entities";
import { GenericRepository } from "@/infrastructure";

export class UserService {
  constructor(private userRepository: GenericRepository<User>) {}

  async getImagesByEmail(email) {
    const images = await this.userRepository.findMany({ email: email });
    return images;
  }

  async getUserByEmail(email) {
    const user = await this.userRepository.findOne({ email: email });
    return user;
  }
  async updateUser(id, userData) {
    const user = await this.userRepository.findByIdAndUpdate(id, userData);
    return user;
  }
  async createUser(email, imageUrl) {
    const user = await this.userRepository.create({
      email: email,
      images: imageUrl,
    });
    return user;
  }
  
  async getExtractedImages(email) {
    const images = await this.getImagesByEmail(email);
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

    const lastExtractedUsers = sortedData.slice();
    const lastExtractedImages = lastExtractedUsers.map((entry) => entry.images);

    return lastExtractedImages;
  }
}
