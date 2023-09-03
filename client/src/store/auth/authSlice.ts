import {
  createSlice,
  isAnyOf,
  type PayloadAction,
  type SerializedError
} from '@reduxjs/toolkit'
import type { ServerError, UserModel } from 'common/common'
import { login, logout, signUp } from './actions/actions'

interface IAuthSliceInitial {
  userData?: UserModel
  isLoading: boolean
  error?: ServerError | SerializedError
}

const AuthSliceInitial: IAuthSliceInitial = {
  userData: undefined,
  isLoading: false,
  error: undefined
}

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState: AuthSliceInitial,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, state => AuthSliceInitial)
    builder
      .addMatcher(
        isAnyOf(login.fulfilled, signUp.fulfilled),
        (state, action: PayloadAction<UserModel>) => {
          state.userData = action.payload
          state.error = undefined
          state.isLoading = false
        }
      )
      .addMatcher(isAnyOf(login.pending, signUp.pending), state => {
        state.userData = undefined
        state.error = undefined
        state.isLoading = true
      })
      .addMatcher(
        isAnyOf(login.rejected, signUp.rejected),
        (state, payload) => {
          state.userData = undefined
          state.isLoading = false
          state.error = payload.payload as ServerError
        }
      )
  }
})

export default AuthSlice.reducer
