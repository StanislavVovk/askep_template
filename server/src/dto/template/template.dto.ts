import { IsNotEmpty, IsString } from 'class-validator'

class TemplateData {
  @IsNotEmpty()
  @IsString()
  conclusion_prev_anamnesis_life: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_kidney: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_liver: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_muscul_sys: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_allergic: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_auscultation: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_cns: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_complaints: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_conscience_state: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_general_condition: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_heart: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_membranes: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_stomach: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_object_tongue: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_pediculosis: string

  @IsNotEmpty()
  @IsString()
  conclusion_prev_scabies: string
}

export class TemplateInfo {
  @IsNotEmpty()
  @IsString()
  readonly template_name: string
}

export class TemplateDto extends TemplateInfo {
  readonly templateData: TemplateData
}
