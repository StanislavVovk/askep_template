import { UserPayloadKey } from 'common/constants/common'
import Joi from 'joi'

import { UserValidationMessage } from '../SchemaErrors/UserValidationMessage'
import { UserValidationRule } from '../SchemaRules/UserValidationRule'

export const UserRegistrationSchema = Joi.object({
  [UserPayloadKey.EMAIL]: Joi.string().trim().email({ tlds: false }).required().messages({
    'any.required': UserValidationMessage.EMAIL_REQUIRE,
    'string.email': UserValidationMessage.EMAIL_WRONG,
    'string.empty': UserValidationMessage.EMAIL_EMPTY
  }), [UserPayloadKey.NAME]: Joi.string()
    .trim()
    .min(UserValidationRule.USERNAME_MIN_LENGTH)
    .max(UserValidationRule.USERNAME_MAX_LENGTH)
    .required()
    .messages({
      'any.required': UserValidationMessage.USERNAME_REQUIRE,
      'string.empty': UserValidationMessage.USERNAME_REQUIRE,
      'string.max': UserValidationMessage.USERNAME_MAX_LENGTH,
      'string.min': UserValidationMessage.USERNAME_MIN_LENGTH
    }), [UserPayloadKey.PASSWORD]: Joi.string()
    .trim()
    .min(UserValidationRule.PASSWORD_MIN_LENGTH)
    .max(UserValidationRule.PASSWORD_MAX_LENGTH)
    .required()
    .messages({
      'any.required': UserValidationMessage.PASSWORD_REQUIRE,
      'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
      'string.max': UserValidationMessage.PASSWORD_MAX_LENGTH,
      'string.min': UserValidationMessage.PASSWORD_MIN_LENGTH
    }), [UserPayloadKey.REPEAT_PASSWORD]: Joi.string()
    .required()
    .equal(Joi.ref(UserPayloadKey.PASSWORD))
    .messages({
      'string.empty': UserValidationMessage.PASSWORD_REP_UNMATCHED_ERROR
    })
})
