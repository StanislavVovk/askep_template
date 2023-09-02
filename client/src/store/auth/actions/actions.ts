import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  type LoginQuery,
  type SignUpQuery
} from 'common/interfaces/AuthRequest'
import { type UserModel } from 'common/interfaces/AuthResponse'
import { type AuthService } from 'services/Auth/Auth.service'
import { AuthActionType } from 'store/auth/actions/ActionType'

export interface ServerError {
  statusCode: number
  message: string
  error: string
}
export const login = createAsyncThunk<
  UserModel,
  LoginQuery,
  {
    rejectWithValue: ServerError
    extra: { service: { Auth: AuthService } }
  }
>(
  AuthActionType.LOGIN,
  async (
    userData: LoginQuery,
    {
      rejectWithValue,
      extra: {
        service: { Auth }
      }
    }
  ) => {
    try {
      const data = await Auth.login(userData)
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
    extra: { service: { Auth: AuthService } }
  }
>(
  AuthActionType.SIGN_UP,
  async (
    userData: SignUpQuery,
    {
      rejectWithValue,
      extra: {
        service: { Auth }
      }
    }
  ) => {
    try {
      return await Auth.signUp(userData)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
