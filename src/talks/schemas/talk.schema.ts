import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TalkDocument = Talk & Document;

@Schema({ autoIndex: true})
export class Talk {

    @Prop({ required: true, index: true })
    title: string;

    @Prop({ required: true, index: true })
    description: string;

    @Prop({ required: true, index: true })
    speakers: string[];

    @Prop({ required: true, index: true })
    schedule: Date;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop()
    updatedAt: Date;

}

export const TalkSchema = SchemaFactory.createForClass(Talk);
