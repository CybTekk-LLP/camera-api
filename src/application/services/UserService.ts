import { User } from "@/domain/entities";
import { GenericRepository } from "@/infrastructure";

export class UserService {
  constructor(private userRepository: GenericRepository<User>) {}

  async getImagesByEmail(email) {
    const images = await this.userRepository.findOne({ email: email });
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
}
