import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(user: { email: string; password: string }): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userData = {
      email: user.email,
      password: hashedPassword,
    } as CreationAttributes<User>; // Явное приведение типа
    return this.userModel.create(userData);
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }
}