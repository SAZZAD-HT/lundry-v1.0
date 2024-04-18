import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './DatabaseModels/DatabaseConnection';

@Module({
  imports: [DatabaseConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
