import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: CreateUserDto): string {
    console.log(body);
    
    return this.appService.getHello();
  }


  @Get()
  getHey(): string {
    return this.appService.getHey();
  }
}
