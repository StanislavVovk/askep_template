import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
  Req
} from '@nestjs/common'
import { apiRoutes } from 'common/common'
import { RequestType } from 'interfaces/RequestType'
import { User } from 'schemas/user/user.schema'
import { TemplateService } from 'services/common'
import {
  TemplateDeleteDto,
  TemplateDto,
  TemplateQueryDto,
  TemplateUpdateDto
} from 'dto/common'
import { TemplateResponse } from 'interfaces/TemplateInterfaces'
import { JwtAuthGuard } from 'guards/common'

@Controller(apiRoutes.TEMPLATE)
export class TemplateController {
  constructor(private templateService: TemplateService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getTemplates(
    @Query() templateQueryDto: TemplateQueryDto,
    @Req() data: RequestType<User>
  ): Promise<TemplateResponse> {
    const userId = data.user._id.toString()
    return this.templateService.getTemplatesByParameter(
      templateQueryDto,
      userId
    )
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-template')
  createTemplate(
    @Body() templateDTO: TemplateDto,
    @Req() data: RequestType<User>
  ): Promise<TemplateResponse> {
    const userId = data.user._id
    return this.templateService.createTemplate(templateDTO, userId)
  }
  @UseGuards(JwtAuthGuard)
  @Get('template')
  getTemplate(
    @Query() templateQueryDto: TemplateQueryDto,
    @Req() data: RequestType<User>
  ): Promise<TemplateResponse> {
    const userId = data.user._id.toString()
    return this.templateService.getTemplateByParameter(templateQueryDto, userId)
  }

  @UseGuards(JwtAuthGuard)
  @Put('template')
  updateTemplate(
    @Body() templateUpdateDto: TemplateUpdateDto,
    @Req() data: RequestType<User>
  ): Promise<TemplateResponse> {
    const userId = data.user._id
    return this.templateService.updateTemplate(templateUpdateDto, userId)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('template')
  deleteTemplate(
    @Body() templateDeleteDto: TemplateDeleteDto,
    @Req() data: RequestType<User>
  ): Promise<TemplateResponse> {
    const userId = data.user._id
    return this.templateService.deleteTemplate(templateDeleteDto, userId)
  }
}
