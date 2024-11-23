import { NestFactory } from '@nestjs/core';
import { AppConfig, appOptions } from 'src/config/app.config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, appOptions);
  await AppConfig.beforeAll(app);
}
bootstrap();
