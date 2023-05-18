import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';

const ENV = process.env.ENV ?? 'local';
console.log('ENV: ', ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? './env.local.env' : `./env.${ENV}.env`,
      isGlobal: true,
      load: [config],
      cache: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `${ENV == 'local' ? `mongodb://${configService.get<string>('MONGO_DB_HOST')}:${configService.get<string>('MONGO_DB_PORT')}/${configService.get<string>('MONGO_DB_DATABASE_NAME')}`:

          `mongodb+srv://${configService.get<string>('MONGO_DB_USERNAME')}:${configService.get<string>('MONGO_DB_PASSWORD')}@${configService.get<string>('MONGO_DB_HOST_NAME')}/${configService.get<string>('MONGO_DB_DATABASE_NAME')}?retryWrites=true&w=majority`}`, //MongoParseError: Ports not accepted with 'mongodb+srv' URIs
        useNewUrlParser: true,
        //useCreateIndex: true,
      }),
      inject: [ConfigService]
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/conference')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
