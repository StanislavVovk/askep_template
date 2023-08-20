import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TemplateDto } from './template.dto';

export class TemplateQuery {
  @IsString()
  @IsNotEmpty()
  parameter: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}
// too many Dto?

export class TemplateQueryDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @IsString()
  @IsOptional()
  readonly queryFilter?: string;
}

export class TemplateUpdateDto extends TemplateDto {
  @IsNotEmpty()
  @IsString()
  readonly templateId: string;
}

export class TemplateDeleteDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @IsNotEmpty()
  @IsString()
  readonly templateId: string;
}
