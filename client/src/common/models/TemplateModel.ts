import { type TemplatePayloadKey } from 'common/constants/DefaultValues/TemplatePayloadKey'
import { type ValueOf } from 'common/interfaces/ValueOf'

export type TemplateModel = Record<ValueOf<typeof TemplatePayloadKey>, string>

export type TemplateData =Omit<TemplateModel, TemplatePayloadKey.TEMPLATE_NAME>

