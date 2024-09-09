import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AffiliateModule } from './affiliate/affiliate.module';
import { PersonController } from './person/person.controller';
import { PersonModule } from './person/person.module';
import { PersonService } from './person/person.service';

@Module({
  imports: [AffiliateModule, PersonModule],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService],
  exports: [],
})
export class AppModule {}
