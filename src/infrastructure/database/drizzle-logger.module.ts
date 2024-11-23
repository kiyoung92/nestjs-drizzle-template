import { Module } from '@nestjs/common';
import { DrizzleLoggerService } from 'src/infrastructure/database/drizzle-logger.service';
import { CustomLoggerModule } from 'src/infrastructure/logger/custom-logger.module';

@Module({
  imports: [CustomLoggerModule],
  providers: [DrizzleLoggerService],
  exports: [DrizzleLoggerService],
})
export class DrizzleLoggerModule {}
