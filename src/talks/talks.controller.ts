import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TalksService } from './talks.service';
import { CreateTalkDto } from './dto/create-talk.dto';
import { Response } from 'express';
import { UpdateTalkDto } from './dto/update-talk.dto';

@Controller('talks')
export class TalksController {
  constructor(private readonly talksService: TalksService) {}

  @Post()
  async create(@Body() createTalkDto: CreateTalkDto, @Res() res : Response) {

    const talk = await this.talksService.create(createTalkDto);

    return res.status(HttpStatus.CREATED).json({
      code: 'CRT-TLK-00',
      success: true,
      status: 'success',
      message: 'Talk was created successfully',
      data: {
        talk: talk
      }
    });

  }

  @Patch(':id/attendee/add')
  async addAttendee(@Param('id') talkId: string, @Body() updateTalkDto: UpdateTalkDto, @Res() res : Response) {

    const talk = await this.talksService.addAttendee(talkId, updateTalkDto);

    return res.status(HttpStatus.OK).json({
      code: 'ADD-ATTND-TO-TLK-00',
      success: true,
      status: 'success',
      message: 'Attendee was added to a Talk successfully',
      data: {
        talk: talk
      }
    });

  }

}
