import { BaseEntity } from "@/domain/entities";
import bcrypt from "bcryptjs";
import {
  Entity,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  OneToMany,
} from "typeorm";

export enum UserType {
  Admin = "admin",
  Staff = "staff",
  Customer = "customer",
}

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: true })
  name?: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async savePassword() {
    if (this.password) {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    }
  }

  @Column({ nullable: true })
  profilePic?: string;

  @Column({ nullable: true })
  storeDetails?: string;

  @Column({ nullable: true, unique: true })
  phoneNumber?: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: [UserType.Customer],
    array: true,
  })
  _userTypes?: UserType[];
}
