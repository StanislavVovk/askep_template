import { UserValidationRule } from 'common/schemas/SchemaRules/UserValidationRule'

export const UserValidationMessage = {
  EMAIL_EMPTY: 'Email field can not be empty',
  EMAIL_REQUIRE: 'Email is required',
  EMAIL_WRONG: 'Email is wrong',
  PASSWORD_EMPTY: 'Password field can not be empty',

  PASSWORD_MAX_LENGTH: `Password must be at most ${UserValidationRule.PASSWORD_MAX_LENGTH} characters long`,
  PASSWORD_MIN_LENGTH: `Password must be at least ${UserValidationRule.PASSWORD_MIN_LENGTH} characters long`,
  PASSWORD_REP_EMPTY: 'Repeat password field can not be empty',
  PASSWORD_REP_UNMATCHED_ERROR: `Passwords are different`,

  PASSWORD_REQUIRE: 'Password is required',

  REPEAT_PASSWORD_REQUIRE: 'Repeat password is require',

  USERNAME_EMPTY: 'Name field can not be empty',
  USERNAME_MAX_LENGTH: `Username must be at most ${UserValidationRule.USERNAME_MAX_LENGTH} characters long`,
  USERNAME_MIN_LENGTH: `Username must be at least ${UserValidationRule.USERNAME_MIN_LENGTH} characters long`,
  USERNAME_REQUIRE: 'Username is required'
}


