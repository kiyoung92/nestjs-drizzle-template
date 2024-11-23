import { Module } from '@nestjs/common';
import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import { DRIZZLE_PROVIDER } from 'src/infrastructure/database/constants/constants';
import { DrizzleLoggerModule } from 'src/infrastructure/database/drizzle-logger.module';
import { DrizzleLoggerService } from 'src/infrastructure/database/drizzle-logger.service';
import { Mysql2Module } from 'src/infrastructure/database/mysql/mysql.module';
import { Mysql2Service } from 'src/infrastructure/database/mysql/mysql.service';

import * as schema from './schemas/schema';

@Module({
  imports: [Mysql2Module, DrizzleLoggerModule],
  providers: [
    {
      provide: DRIZZLE_PROVIDER,
      inject: [Mysql2Service, DrizzleLoggerService],
      useFactory: async (
        mysql: Mysql2Service,
        logger: DrizzleLoggerService,
      ) => {
        const db = drizzle(mysql.pool, {
          mode: 'default',
          schema,
          logger,
        }) as MySql2Database<typeof schema>;

        return db;
      },
    },
  ],
  exports: [DRIZZLE_PROVIDER],
})
export class DrizzleModule {}
