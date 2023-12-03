import { Injectable } from '@nestjs/common';
// import { dbProperti } from './constans/database';

@Injectable()
export class AppService {
  getHello(): string {
    return `${process.env.APP_WEDDING_USERNAME}`;
  }
}
