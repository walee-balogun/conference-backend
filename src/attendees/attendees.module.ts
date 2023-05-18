import { Module } from '@nestjs/common';
import { AttendeesService } from './attendees.service';
import { AttendeesController } from './attendees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendee, AttendeeSchema } from './schemas/attendee.schema';
import { AttendeesRepository } from './attendees.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Attendee.name, schema: AttendeeSchema }])],
  controllers: [AttendeesController],
  providers: [AttendeesService, AttendeesRepository],
  exports: [AttendeesService, AttendeesRepository]
})
export class AttendeesModule {}
