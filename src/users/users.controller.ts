import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Get()
  async findAll(
    @Query('id') id: string,
    @Query('searchTerm') searchTerm: string,
  ) {
    const filters = [];

    if (id) {
      filters.push({ id: { equals: id } });
    }

    if (searchTerm) {
      filters.push(
        { displayName: { contains: searchTerm } },
        { username: { contains: searchTerm } },
      );
    }
    return this.users.findAll({
      where: {
        OR: filters.length ? filters : undefined,
      },
    });
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async signupUser(@Body() userData: CreateUserDto) {
    return this.users.createOne(userData);
  }
}
