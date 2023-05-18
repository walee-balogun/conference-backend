import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TalksService } from './talks.service';
import { CreateTalkDto } from './dto/create-talk.dto';
import { Response } from 'express';

@Controller('talks')
export class TalksController {
  constructor(private readonly talksService: TalksService) {}

  @Post()
  async create(@Body() createTalkDto: CreateTalkDto, @Res() res : Response) {

    const talk = await this.talksService.create(createTalkDto);

    return res.status(HttpStatus.OK).json({
      code: 'CRT-TLK-00',
      success: true,
      status: 'success',
      message: 'Talk was created successfully',
      data: {
        talk: talk
      }
    });

  }

}
