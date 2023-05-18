import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);
  const mongoDbHost = configService.get<string>('MONGO_DB_HOST');
  const mongoDbHostName = configService.get<string>('MONGO_DB_HOST_NAME');
  const mongoDbPort = configService.get<string>('MONGO_DB_PORT');
  const mongoDbUsername = configService.get<string>('MONGO_DB_USERNAME');
  const mongoDbPassword = configService.get<string>('MONGO_DB_PASSWORD');
  const mongoDbName = configService.get<string>('MONGO_DB_DATABASE_NAME');

  console.log('mongoDbHost: ', mongoDbHost);
  console.log('mongoDbHostName: ', mongoDbHostName);
  console.log('mongoDbPort: ', mongoDbPort);
  console.log('mongoDbUsername: ', mongoDbUsername);
  console.log('mongoDbPassword: ', mongoDbPassword);
  console.log('mongoDbName: ', mongoDbName);
  



  await app.listen(3000);
}
bootstrap();
