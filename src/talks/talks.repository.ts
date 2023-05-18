import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Talk, TalkDocument } from "./schemas/talk.schema";
import { Model } from "mongoose";
import { CreateTalkDto } from "./dto/create-talk.dto";
import * as moment from 'moment';
import { Attendee } from "src/attendees/schemas/attendee.schema";


@Injectable()
export class TalksRepository {

    constructor(@InjectModel(Talk.name) private talkModel: Model<TalkDocument>) {

    }

    async createOne(createTalkDto: CreateTalkDto): Promise<Talk> {

        const { title, description, speakers, schedule } = createTalkDto;

        const talk = new Talk();

        talk.title = title;
        talk.description = description;
        talk.speakers = speakers;
        talk.schedule = moment(schedule, "DD-MM-YYYY HH:mm:ss ZZ").toDate();

        return this.talkModel.create(talk);
    }

    async addAttendee(talkId: string, attendees: Attendee[]): Promise<Talk> {

        const talk = await this.findOneById(talkId);
        
        const talkDocument = new this.talkModel(talk);

        if (talk.attendees) {

            //talkDocument.attendees.some(attendee => attendees.includes(attendee))

            talkDocument.attendees.push(...attendees);

        } else {

            talkDocument.attendees = attendees;

        }

        talkDocument.updatedAt = moment().toDate();

        return talkDocument.save();
    }

    async findOneById(talkId: string): Promise<Talk> {

        const talkDocument = await this.talkModel.findById(talkId).exec();

        if (!talkDocument) {

            throw new NotFoundException('Talk does not exist');
        }

        return talkDocument;
    }

}