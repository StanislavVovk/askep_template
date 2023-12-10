import { type TemplateData } from 'common/models/TemplateModel'

export interface TemplateResponse {
  _id: string,
  templateData: TemplateData
  templateName: string
}
