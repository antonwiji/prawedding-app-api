import { Body, Inject, Injectable, Res, forwardRef } from '@nestjs/common';
import { Users } from 'src/models/users/users.entity';
import { Response } from 'express';
import { AuthService } from 'src/auth/auth.service';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private userRepository: typeof Users,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  private readonly users = [
    {
      userId: 1,
      username: 'leraku12',
      password: 'manotau123',
    },
    {
      userId: 2,
      username: 'leraku01',
      password: 'manotau123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findAll(@Res() res: Response): Promise<void> {
    try {
      const data = await this.userRepository.findAll({
        attributes: ['name', 'username', 'password', 'email'],
      });
      res.status(200).json({
        status: 200,
        message: 'success',
        data: {
          users: data,
        },
      });
    } catch (error) {
      res.json({
        message: error,
      });
    }
  }

  async cratedUsers(@Body() req: Users, @Res() res: Response) {
    try {
      const password = await this.authService.hashPassword(req.password);

      await this.userRepository.sequelize.query(
        `INSERT INTO users (name, username, password, email) VALUES (:name, :username, :password, :email)`,
        {
          replacements: {
            name: req.name,
            username: req.username,
            password: password,
            email: req.email,
          },
        },
      );
      res.status(201).json({
        status: 201,
        message: 'success to crate users',
      });
    } catch (error) {
      res.json({
        message: error,
      });
    }
  }
}
