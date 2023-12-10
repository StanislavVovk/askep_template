import { TemplatePayloadKey } from 'common/common'
import Joi from 'joi'
// todo move errors messages to another file

export const TemplateSchema = Joi.object({
  [TemplatePayloadKey.CONCLUSION_PREV_ANAMNESIS_LIFE]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_KIDNEY]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_LIVER]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_MUSCUL_SYS]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_ALLERGIC]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_AUSCULTATION]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_CNS]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_COMPLAINTS]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_CONSCIENCE_STATE]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_GENERAL_CONDITION]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_HEART]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_MEMBRANES]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_STOMACH]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_OBJECT_TONGUE]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_PEDICULOSIS]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.CONCLUSION_PREV_SCABIES]: Joi.string()
    .trim()
    .optional()
    .allow(''),
  [TemplatePayloadKey.HOSP_DIAGONSIS]: Joi.string().trim().required().messages({
    'string.empty': 'Діагноз не може бути порожнім'
  }),
  [TemplatePayloadKey.SYMPTOMS_FINDER]: Joi.string().trim().optional().allow(''),
  [TemplatePayloadKey.TEMPLATE_NAME]: Joi.string()
    .trim()
    .required()
    .messages({
    'string.empty': 'Назва шаблону не може бути порожньою'
  })
})
