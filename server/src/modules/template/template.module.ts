import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemplateSchema } from 'schemas/common';
import { TemplateController } from 'controllers/common';
import { TemplateService } from 'services/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Template', schema: TemplateSchema }]),
  ],
  controllers: [TemplateController],
  providers: [TemplateService],
  exports: [],
})
export class TemplateModule {}
