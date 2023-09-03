import axios, { type AxiosError, isAxiosError } from 'axios'
import { API_PATH, AUTH_API } from 'common/common'
import {
  type LoginQuery,
  type SignUpQuery
} from 'common/interfaces/AuthRequest'
import { type UserModel } from 'common/interfaces/UserModel'

export class AuthService {
  private readonly _apiPath: string

  constructor(_apiPath: string) {
    this._apiPath = _apiPath
  }

  signUp(query: SignUpQuery) {
    return axios
      .post<UserModel>(
        `${this._apiPath}${API_PATH.AUTH}${AUTH_API.SIGN_UP}`,
        query
      )
      .then(userData => userData.data)
      .catch((error: AxiosError) => {
        if (isAxiosError(error) && error.response) {
          throw (error.response.data)
        }
        throw Error(error.message)
      })
  }

  login(query: LoginQuery) {
    return axios
      .get<UserModel>(`${this._apiPath}${API_PATH.AUTH}${AUTH_API.LOGIN}`, {
        params: query,
        headers: { 'Content-Type': 'application/json' }
      })
      .then(userData => userData.data)
      .catch((error: AxiosError) => {
        if (isAxiosError(error) && error.response) {
          throw (error.response.data)
        }
        throw Error(error.message)
      })
  }
}

// {statusCode: number, message: string, error: string}
