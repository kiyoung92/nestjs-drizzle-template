import { Module } from '@nestjs/common';
import { CustomLoggerService } from 'src/infrastructure/logger/custom-logger.service';

@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class CustomLoggerModule {}
