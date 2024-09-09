import { Controller, Get } from '@nestjs/common';

@Controller('affiliate')
export class AffiliateController {
  @Get()
  getHello(): string {
    return 'hola';
  }
}
