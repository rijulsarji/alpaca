import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAwardDto } from './awards.dto';
import { AwardsService } from './awards.service';
import { Prisma } from '@prisma/client';

@Controller('awards')
export class AwardsController {
  constructor(private awards: AwardsService) {}

  @Get()
  async findAwards(@Query('id') id: string, @Query('userId') userId: string) {
    const filters = [];
    if (id) {
      filters.push({ id: { equals: id } });
    }

    if (userId) {
      filters.push({ userId: { equals: userId } });
    }
    return await this.awards.findWithFilters({
      where: { OR: filters.length ? filters : undefined },
    });
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createAward(@Body() createAwardDto: CreateAwardDto) {
    return await this.awards.createOne(createAwardDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateAward(
    @Param('id') id: string,
    @Body() updateAwardDto: Partial<CreateAwardDto>,
  ) {
    return await this.awards.updateOne(id, updateAwardDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async deleteAward(@Param('id') id: string) {
    return await this.awards.deleteOne(id);
  }
}
