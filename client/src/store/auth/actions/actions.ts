import { createAsyncThunk } from '@reduxjs/toolkit'
import type {
  LoginQuery,
  SignUpQuery,
  UserModel,
  ServerError
} from 'common/common'
import { type AuthService } from 'services/Auth/Auth.service'
import { type StorageService } from 'services/Storage/Storage.service'
import { AuthActionType } from 'store/auth/actions/ActionType'

export const login = createAsyncThunk<
  UserModel,
  LoginQuery,
  {
    rejectWithValue: ServerError
    extra: { service: { Auth: AuthService; Storage: StorageService } }
  }
>(
  AuthActionType.LOGIN,
  async (
    userData: LoginQuery,
    {
      rejectWithValue,
      extra: {
        service: { Auth, Storage }
      }
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
    rejectWithValue: ServerError
    extra: { service: { Auth: AuthService; Storage: StorageService } }
  }
>(
  AuthActionType.SIGN_UP,
  async (
    userData: SignUpQuery,
    {
      rejectWithValue,
      extra: {
        service: { Auth, Storage }
      }
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
  object,
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
