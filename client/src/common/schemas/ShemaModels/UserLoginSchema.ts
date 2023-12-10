import { UserPayloadKey } from 'common/common'
import Joi from 'joi'

import { UserValidationMessage } from '../SchemaErrors/UserValidationMessage'
import { UserValidationRule } from '../SchemaRules/UserValidationRule'

export const UserLoginSchema = Joi.object({
  [UserPayloadKey.EMAIL]: Joi.string().trim().email({ tlds: false }).required().messages({
    'any.required': UserValidationMessage.EMAIL_REQUIRE,
    'string.email': UserValidationMessage.EMAIL_WRONG,
    'string.empty': UserValidationMessage.EMAIL_EMPTY
  }),
  [UserPayloadKey.PASSWORD]: Joi.string()
    .trim()
    .min(UserValidationRule.PASSWORD_MIN_LENGTH)
    .max(UserValidationRule.PASSWORD_MAX_LENGTH)
    .required()
    .messages({
      'any.required': UserValidationMessage.PASSWORD_REQUIRE,
      'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
      'string.max': UserValidationMessage.PASSWORD_MAX_LENGTH,
      'string.min': UserValidationMessage.PASSWORD_MIN_LENGTH
    })
})
