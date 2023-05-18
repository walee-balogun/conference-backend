import { Injectable } from '@nestjs/common';
import { CreateTalkDto } from './dto/create-talk.dto';
import { TalksRepository } from './talks.repository';
import { Talk } from './schemas/talk.schema';

@Injectable()
export class TalksService {

  constructor(private talksRepository: TalksRepository) {

  }

  create(createTalkDto: CreateTalkDto): Promise<Talk> {
    return this.talksRepository.createOne(createTalkDto);
  }

}
