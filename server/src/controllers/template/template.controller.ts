import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put, Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { apiRoutes } from 'common/common';
import { TemplateService } from 'services/common';
import {
  TemplateDeleteDto,
  TemplateDto,
  TemplateQueryDto,
  TemplateUpdateDto,
} from 'dto/common';
import { TemplateResponse } from 'interfaces/TemplateInterfaces';
import { JwtAuthGuard } from 'guards/common';

// case: other user which know his Bearer jwt can CRUD other user's template data
// todo how can I know that true user CRUD his data
// todo thunk about adding :id to path and then take templateId from path
@Controller(apiRoutes.TEMPLATE)
export class TemplateController {
  constructor(private templateService: TemplateService) {}
  @UseGuards(JwtAuthGuard)
  @Get('templates')
  getTemplates(
    @Query() templateQueryDto: TemplateQueryDto,
  ): Promise<TemplateResponse> {
    return this.templateService.getTemplatesByParameter(templateQueryDto);
  }
  @UseGuards(JwtAuthGuard)
  @Post('template')
  createTemplate(@Body() templateDTO: TemplateDto): Promise<any> {
    return this.templateService.createTemplate(templateDTO);
  }
  @UseGuards(JwtAuthGuard)
  @Get('template')
  getTemplate(
    @Query() templateQueryDto: TemplateQueryDto,
  ): Promise<TemplateResponse> {
    return this.templateService.getTemplateByParameter(templateQueryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('template')
  updateTemplate(@Body() templateUpdateDto: TemplateUpdateDto) {
    return this.templateService.updateTemplate(templateUpdateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('template')
  deleteTemplate(@Body() templateDeleteDto: TemplateDeleteDto) {
    return this.templateService.deleteTemplate(templateDeleteDto);
  }
}
