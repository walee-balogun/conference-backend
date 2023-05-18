import { Module } from '@nestjs/common';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Talk, TalkSchema } from './schemas/talk.schema';
import { TalksRepository } from './talks.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Talk.name, schema: TalkSchema}])],
  controllers: [TalksController],
  providers: [TalksService, TalksRepository],
  exports: [TalksService, TalksRepository]
})
export class TalksModule {}
