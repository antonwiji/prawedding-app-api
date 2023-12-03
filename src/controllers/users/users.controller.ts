import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
// import { Users } from 'src/models/users.entity';
import { Response } from 'express';
import { Users } from 'src/models/users/users.entity';
// import { Users } from 'src/models/users/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  async getAllUsers(@Res() res: Response): Promise<any> {
    // const data = await this.usersService.findAll();
    // console.log('controllers', data);
    // return await this.usersService.findAll();
    this.usersService.findAll(res);
  }

  @Post('users')
  async createdUsers(@Body() users: Users, @Res() res: Response) {
    this.usersService.cratedUsers(users, res);
  }
}
