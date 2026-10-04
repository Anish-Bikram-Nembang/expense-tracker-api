import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  returnHelloWorld(): string {
    return 'Hello, World';
  }
}
