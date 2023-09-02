import { UserPayloadKey } from 'common/common'
import { UserValidationRule } from '../SchemaRules/UserValidationRule'
import Joi from 'joi'
import { UserValidationMessage } from '../SchemaErrors/UserValidationMessage'

export const UserLoginSchema = Joi.object({
  [UserPayloadKey.EMAIL]: Joi.string().trim().email({ tlds: false }).required().messages({
    'string.email': UserValidationMessage.EMAIL_WRONG,
    'any.required': UserValidationMessage.EMAIL_REQUIRE,
    'string.empty': UserValidationMessage.EMAIL_EMPTY
  }),
  [UserPayloadKey.PASSWORD]: Joi.string()
    .trim()
    .min(UserValidationRule.PASSWORD_MIN_LENGTH)
    .max(UserValidationRule.PASSWORD_MAX_LENGTH)
    .required()
    .messages({
      'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
      'any.required': UserValidationMessage.PASSWORD_REQUIRE,
      'string.min': UserValidationMessage.PASSWORD_MIN_LENGTH,
      'string.max': UserValidationMessage.PASSWORD_MAX_LENGTH
    })
})
