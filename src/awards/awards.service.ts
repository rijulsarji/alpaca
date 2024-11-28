import { Injectable } from '@nestjs/common';
import { CreateAwardDto } from './awards.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AwardsService {
  constructor(private prisma: PrismaService) {}

  async createOne(data: CreateAwardDto) {
    return await this.prisma.award.create({ data });
  }

  async updateOne(id: string, data: Partial<CreateAwardDto>) {
    return await this.prisma.award.update({ where: { id }, data });
  }

  async deleteOne(id: string) {
    return await this.prisma.award.delete({ where: { id } });
  }

  async findWithFilters({ where }: Prisma.AwardFindManyArgs) {
    return await this.prisma.award.findMany({ where });
  }
}
