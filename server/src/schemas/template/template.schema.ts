import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { ITemplateData } from 'interfaces/TemplateInterfaces'

@Schema()
export class Template extends Document {
  @Prop()
  templateName: string

  @Prop()
  userId: string

  @Prop({ type: Map, of: String })
  templateData: ITemplateData
}

export const TemplateSchema = SchemaFactory.createForClass(Template)
