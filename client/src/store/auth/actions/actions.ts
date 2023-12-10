import type {
  LoginQuery,
  ServerError,
  SignUpQuery,
  UserModel
} from 'common/common'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { type AuthService } from 'services/Auth/Auth.service'
import { type StorageService } from 'services/Storage/Storage.service'
import { AuthActionType } from 'store/auth/actions/ActionType'

export const login = createAsyncThunk<
  UserModel,
  LoginQuery,
  {
    extra: { service: { Auth: AuthService; Storage: StorageService } }
    rejectWithValue: ServerError
  }
>(
  AuthActionType.LOGIN,
  async (
    userData: LoginQuery,
    {
      extra: {
        service: { Auth, Storage }
      },
      rejectWithValue
    }
  ) => {
    try {
      const data = await Auth.login(userData)
      Storage.setItem('token', data.token)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const signUp = createAsyncThunk<
  UserModel,
  SignUpQuery,
  {
    extra: { service: { Auth: AuthService; Storage: StorageService } }
    rejectWithValue: ServerError
  }
>(
  AuthActionType.SIGN_UP,
  async (
    userData: SignUpQuery,
    {
      extra: {
        service: { Auth, Storage }
      },
      rejectWithValue
    }
  ) => {
    try {
      const data = await Auth.signUp(userData)
      Storage.setItem('token', data.token)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const logout = createAsyncThunk<
  null,
  string | undefined,
  { extra: { service: { Storage: StorageService } } }
>(
  AuthActionType.LOGOUT,
  (
    _request,
    {
      extra: {
        service: { Storage }
      }
    }
  ) => {
    // todo probably it would better to use clear storage
    // fixme search more elegance solution of this case
    Storage.clearItem('token')
    Storage.clearItem('persist:root')
    Storage.clearItem('persist:auth')

    return null
  }
)


export const checkTokenValidity = createAsyncThunk<
  boolean,
  string,
  { extra: { service: { Auth: AuthService,  Storage: StorageService } } }
>(
  AuthActionType.CHECK_VALIDITY,
  (token, {extra: {service: {Auth, Storage}}}) => {
    try {
    return Auth.checkTokenValidity(token)
    }
    catch (e) {
      return false
    }

})
