import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async findOne(userWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({ where: userWhereUniqueInput });
  }

  async findAll(params: { where: Prisma.UserWhereInput }) {
    return this.prisma.user.findMany({ where: params.where });
  }

  async createOne(data: CreateUserDto) {
    const user: Prisma.UserCreateInput = {
      email: data.email,
      username: data.username,
      displayName: data.displayName,
      displayImage: data.displayImage,
    };
    return this.prisma.user.create({ data });
  }
}
