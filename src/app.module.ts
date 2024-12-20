import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from './prisma.service';
import { AwardsController } from './awards/awards.controller';
import { AwardsService } from './awards/awards.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, AwardsController],
  providers: [AppService, UsersService, PrismaService, AwardsService],
})
export class AppModule {}
