import { UserPayloadKey } from './UserPayloadKey'

export const UserLoginDefaultValues = {
    [UserPayloadKey.EMAIL]: '',
    [UserPayloadKey.PASSWORD]: '',
}

export const UserRegistrationDefaultValues = {
  [UserPayloadKey.EMAIL]: '',
  [UserPayloadKey.NAME]: '',
  [UserPayloadKey.PASSWORD]: '',
  [UserPayloadKey.REPEAT_PASSWORD]: '',
}
