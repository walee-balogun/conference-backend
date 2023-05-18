import { Injectable } from '@nestjs/common';
import { CreateTalkDto } from './dto/create-talk.dto';
import { TalksRepository } from './talks.repository';
import { Talk } from './schemas/talk.schema';
import { AttendeesRepository } from 'src/attendees/attendees.repository';
import { UpdateTalkDto } from './dto/update-talk.dto';

@Injectable()
export class TalksService {

  constructor(private talksRepository: TalksRepository, private attendeesRepository: AttendeesRepository) {

  }

  create(createTalkDto: CreateTalkDto): Promise<Talk> {
    return this.talksRepository.createOne(createTalkDto);
  }

  async addAttendee(talkId: string, updateTalkDto: UpdateTalkDto): Promise<Talk> {

    const attendees = [];

    for (let attendeeId of updateTalkDto.attendees) {
      
      let attendee = await this.attendeesRepository.findOneById(attendeeId);

      attendees.push(attendee);
    }

    return this.talksRepository.addAttendee(talkId, attendees);
  }

}
