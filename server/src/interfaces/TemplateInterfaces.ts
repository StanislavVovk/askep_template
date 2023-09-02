import { HttpStatus } from '@nestjs/common'
import { Template } from 'schemas/common'

// for sure, we don't really need message field at this type
// coz we can identify response by status field at frontend part
// todo think about enhancement of this type

export type TemplateResponse = {
  status: HttpStatus
  data?: Template | Template[]
}

export interface ITemplateData {
  conclusion_prev_anamnesis_life: string
  conclusion_prev_kidney: string
  conclusion_prev_liver: string
  conclusion_prev_muscul_sys: string
  conclusion_prev_object_allergic: string
  conclusion_prev_object_auscultation: string
  conclusion_prev_object_cns: string
  conclusion_prev_object_complaints: string
  conclusion_prev_object_conscience_state: string
  conclusion_prev_object_general_condition: string
  conclusion_prev_object_heart: string
  conclusion_prev_object_membranes: string
  conclusion_prev_object_stomach: string
  conclusion_prev_object_tongue: string
  conclusion_prev_pediculosis: string
  conclusion_prev_scabies: string
}
