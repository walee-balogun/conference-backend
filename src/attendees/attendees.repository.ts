import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Attendee, AttendeeDocument } from "./schemas/attendee.schema";
import { Model } from "mongoose";
import { CreateAttendeeDto } from "./dto/create-attendee.dto";

@Injectable()
export class AttendeesRepository {

    constructor(@InjectModel(Attendee.name) private attendeeModel: Model<AttendeeDocument>) {

    }

    async createOne(createAttendeeDto: CreateAttendeeDto): Promise<Attendee> {

        const { firstName, lastName, username, email } = createAttendeeDto;

        const attendee = new Attendee();

        attendee.firstName = firstName;
        attendee.lastName = lastName;
        attendee.username = username;
        attendee.email = email;

        return this.attendeeModel.create(attendee);

    }

}