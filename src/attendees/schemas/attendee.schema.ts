import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AttendeeDocument = Attendee & Document;

@Schema({ autoIndex: true })
export class Attendee {

    @Prop({ required: true, index: true })
    firstName: string;

    @Prop({ required: true, index: true })
    lastName: string;

    @Prop({ required: true, index: true })
    username: string;

    @Prop({ required: true, index: true })
    email: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop()
    updatedAt: Date;
}

export const AttendeeSchema = SchemaFactory.createForClass(Attendee);