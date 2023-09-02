import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import {
  TemplateDeleteDto,
  TemplateDto,
  TemplateQueryDto,
  TemplateUpdateDto
} from 'dto/common'
import { TemplateResponse } from 'interfaces/TemplateInterfaces'
import { Model } from 'mongoose'
import { Template } from 'schemas/common'

//todo add to all methods return type
@Injectable()
export class TemplateService {
  constructor(
    @InjectModel(Template.name) private templateModel: Model<Template>
  ) {}

  async getTemplateByParameter(
    templateQueryDto: TemplateQueryDto,
    userId: string
  ): Promise<TemplateResponse> {
    const { queryFilter } = templateQueryDto
    const filterData = JSON.parse(decodeURIComponent(queryFilter))
    const templateData = await this.templateModel
      .findOne(filterData)
      .where('userId')
      .equals(userId)
      .exec()

    if (templateData)
      return {
        status: HttpStatus.OK,
        data: templateData
      }
    throw new NotFoundException('No data with this parameters')
  }

  async getTemplatesByParameter(
    templateQueryDto: TemplateQueryDto,
    userId: string
  ): Promise<TemplateResponse> {
    const { queryFilter } = templateQueryDto
    const filterData = JSON.parse(decodeURIComponent(queryFilter))

    const templatesData = await this.templateModel
      .find(filterData)
      .where('userId')
      .equals(userId)
      .exec()

    if (templatesData && templatesData.length !== 0) {
      return { status: HttpStatus.OK, data: templatesData }
    }
    throw new NotFoundException('No data with this parameters')
  }

  async createTemplate(templateDto: TemplateDto, userId: string): Promise<TemplateResponse> {
    const { templateData, templateName } = templateDto
    const templateModel = await this.templateModel.create({
      templateName,
      templateData,
      userId
    })
    if (templateModel) {
      return {status: HttpStatus.OK}
    }
    throw new BadRequestException('Whoops there is problems')
  }

  async updateTemplate(
    templateUpdateDto: TemplateUpdateDto,
    userId: string
  ): Promise<TemplateResponse> {
    const { templateData, templateName, templateId } = templateUpdateDto

    const template = await this.templateModel
      .updateOne({ _id: templateId }, { templateName, templateData })
      .where('userId')
      .equals(userId)
      .exec()

    if (!template) throw new NotFoundException('No templates with this id')

    return { status: HttpStatus.OK }
  }

  async deleteTemplate(
    templateDeleteDto: TemplateDeleteDto,
    userId: string
  ): Promise<TemplateResponse> {
    const { templateId } = templateDeleteDto
    const data = await this.templateModel
      .findByIdAndDelete(templateId)
      .where('userId')
      .equals(userId)

    if (data)
      return {
        status: HttpStatus.OK
      }

    throw new NotFoundException('There is no data with this id')
  }
}
