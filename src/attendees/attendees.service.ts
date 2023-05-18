import { Injectable } from '@nestjs/common';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { AttendeesRepository } from './attendees.repository';
import { Attendee } from './schemas/attendee.schema';

@Injectable()
export class AttendeesService {

  constructor(private attendeesRepository: AttendeesRepository) {

  }

  create(createAttendeeDto: CreateAttendeeDto): Promise<Attendee> {
    return this.attendeesRepository.createOne(createAttendeeDto);
  }

  
}
