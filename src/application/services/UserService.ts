import { User } from "@/domain/entities";
import { GenericRepository } from "@/infrastructure";

export class UserService {
  constructor(private userRepository: GenericRepository<User>) {}

  async getImagesByEmail(email) {
    const images = await this.userRepository.findOne({ email: email });
    return images;
  }

}
