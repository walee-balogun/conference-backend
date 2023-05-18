import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Talk, TalkSchema } from './schemas/talk.schema';
import { TalksRepository } from './talks.repository';
import { AttendeesModule } from 'src/attendees/attendees.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: Talk.name,
      useFactory: () => {
        const schema = TalkSchema;

        schema.plugin(require('mongoose-autopopulate'));

        return schema;
      }
    }]),
    AttendeesModule
  ],
  controllers: [TalksController],
  providers: [TalksService, TalksRepository],
  exports: [TalksService, TalksRepository]
})
export class TalksModule { }
