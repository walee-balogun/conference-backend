import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { AttendeesService } from './attendees.service';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { Response } from 'express';

@Controller('attendees')
export class AttendeesController {

  constructor(private readonly attendeesService: AttendeesService) {}

  @Post()
  async create(@Body() createAttendeeDto: CreateAttendeeDto, @Res() res: Response) {

    const attendee = await this.attendeesService.create(createAttendeeDto);

    return res.status(HttpStatus.OK).json({
      code: 'CRT-ATTND-00',
      success: true,
      status: 'success',
      message: 'Attendee was created successfully',
      data: {
        attendee: attendee
      }
    });

  }

}
