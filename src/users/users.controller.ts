import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}

  @Post('create')
  async signupUser(@Body() userData: { name?: string; email: string }) {
    return this.users.createUser(userData);
  }

  @Get()
  async findUsers(
    @Query('searchString') searchString: string,
    @Query('id') id: number,
  ) {
    return this.users.users({
      where: {
        OR: [{ name: { contains: searchString } }, { id: { equals: +id } }],
      },
    });
  }
}
