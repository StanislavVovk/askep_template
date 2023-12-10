export enum API_PATH {
  AUTH = '/auth',
  TEMPLATE = '/template'
}

export enum AUTH_API {
  CHECK_TOKEN_VALIDITY = '/check-token-validity',
  LOGIN = '/login',
  SIGN_UP = '/signup'
}

export enum TEMPLATE_API {
  CREATE_TEMPLATE='/create-template',
  DELETE_TEMPLATE='/delete-template',
  GET_TEMPLATE = '/get-template',
  GET_TEMPLATES = '/get-templates',
  UPDATE_TEMPLATE='/update-template'
}
