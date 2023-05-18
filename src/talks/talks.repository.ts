import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Talk, TalkDocument } from "./entities/talk.schema";
import { Model } from "mongoose";
import { CreateTalkDto } from "./dto/create-talk.dto";
import * as moment from 'moment';


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
}