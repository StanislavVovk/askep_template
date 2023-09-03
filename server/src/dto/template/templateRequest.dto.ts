import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { TemplateDto } from './template.dto'

export class TemplateQueryDto {
  @IsString()
  @IsOptional()
  readonly queryFilter?: string
}

// fixme use Request :id instead of using templateId
export class TemplateUpdateDto extends TemplateDto {
  @IsNotEmpty()
  @IsString()
  readonly templateId: string
}

export class TemplateDeleteDto {
  @IsNotEmpty()
  @IsString()
  readonly templateId: string
}
