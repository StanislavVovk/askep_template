import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Template } from 'schemas/common';
import {
  TemplateDeleteDto,
  TemplateDto,
  TemplateQueryDto,
  TemplateUpdateDto,
} from 'dto/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

//todo add to all methods return type
@Injectable()
export class TemplateService {
  constructor(
    @InjectModel(Template.name) private templateModel: Model<Template>,
  ) {}

  async getTemplateByParameter(
    templateQueryDto: TemplateQueryDto,
  ): Promise<any> {
    const { queryFilter, userId } = templateQueryDto;
    const filterData = JSON.parse(decodeURIComponent(queryFilter));
    const templateData = await this.templateModel
      .findOne(filterData)
      .where('userId')
      .equals(userId)
      .exec();

    // todo probably better decision is to cast to Array type
    // smtng like that type Response = data: [{templateName: object, templateData: object}, ...etc]

    if (templateData)
      return {
        status: HttpStatus.FOUND,
        data: {
          templateName: templateData.templateName,
          templateData: templateData.templateData,
        },
      };
    throw new NotFoundException('No data with this parameters');
  }

  async getTemplatesByParameter(
    templateQueryDto: TemplateQueryDto,
  ): Promise<any> {
    const { queryFilter, userId } = templateQueryDto;
    const filterData = JSON.parse(decodeURIComponent(queryFilter));

    const templatesData = await this.templateModel
      .find(filterData)
      .where('userId')
      .equals(userId);

    if (templatesData && templatesData.length !== 0)
      return { status: HttpStatus.FOUND, data: templatesData };
    throw new NotFoundException('No data with this parameters');
  }

  async createTemplate(templateDto: TemplateDto): Promise<any> {
    const { templateData, templateName, userId } = templateDto;
    await this.templateModel.create({
      templateName,
      templateData,
      userId,
    });

    return {
      status: HttpStatus.CREATED,
      message: 'Template created successful',
    };
  }

  async updateTemplate(templateUpdateDto: TemplateUpdateDto): Promise<any> {
    const { templateData, templateName, templateId } = templateUpdateDto;

    const template = await this.templateModel.updateOne(
      { _id: templateId },
      { templateName, templateData },
    );
    if (!template) throw new NotFoundException('No templates with this id');

    return { status: HttpStatus.OK, message: 'Template updated successful' };
  }

  async deleteTemplate(templateDeleteDto: TemplateDeleteDto): Promise<any> {
    const { templateId, userId } = templateDeleteDto;
    const data = await this.templateModel
      .findByIdAndDelete(templateId)
      .where('userId')
      .equals(userId);
    if (data)
      return {
        status: HttpStatus.OK,
        message: 'Template deleted successful',
      };
    throw new NotFoundException('There is no data with this id');
  }
}
