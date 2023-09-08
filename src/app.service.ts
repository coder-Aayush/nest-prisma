import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService extends PrismaClient implements OnModuleInit {
  onModuleInit() {
    this.$connect();
  }
  getHello(): string {
    return 'Hello World!';
  }

  getHey(): string {
    return 'Hey World!';
  }

}
