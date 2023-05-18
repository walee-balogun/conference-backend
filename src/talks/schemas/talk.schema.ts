import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Attendee } from "src/attendees/schemas/attendee.schema";

export type TalkDocument = Talk & Document;

@Schema({ autoIndex: true })
export class Talk {

    @Prop({ required: true, index: true })
    title: string;

    @Prop({ required: true, index: true })
    description: string;

    @Prop({ required: true, index: true })
    speakers: string[];

    @Prop({
        type: [{
            type: MongooseSchema.Types.ObjectId,
            ref: Attendee.name,
            autopopulate: true
        }],
        index: true
    })
    attendees: Attendee[];

    @Prop({ required: true, index: true })
    schedule: Date;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop()
    updatedAt: Date;

}

export const TalkSchema = SchemaFactory.createForClass(Talk);
