import { Module } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { usersProviders } from '../../models/users/users.providers';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from '../../controllers/users/users.controller';
// import { AuthModule } from 'src/auth/auth.module';
// import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, AuthService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
