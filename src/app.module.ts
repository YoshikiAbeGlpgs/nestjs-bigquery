import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueriesModule } from './queries/queries.module';

@Module({
  imports: [QueriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
