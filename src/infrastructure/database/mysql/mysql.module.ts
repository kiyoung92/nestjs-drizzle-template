import { Module } from '@nestjs/common';
import { Mysql2Service } from 'src/infrastructure/database/mysql/mysql.service';
import { CustomLoggerModule } from 'src/infrastructure/logger/custom-logger.module';

@Module({
  imports: [CustomLoggerModule],
  providers: [Mysql2Service],
  exports: [Mysql2Service],
})
export class Mysql2Module {}
