import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { AuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UseGuards(AuthGuard)
  @Get('/testing')
  getHello(): string {
    return this.appService.getHello();
  }
}
