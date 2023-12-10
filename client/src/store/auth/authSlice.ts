import type { ServerError, UserModel } from 'common/common'

import {
  type PayloadAction,
  type SerializedError,
  createSlice,
  isAnyOf
} from '@reduxjs/toolkit'

import { checkTokenValidity, login, logout, signUp } from './actions/actions'

interface IAuthSliceInitial {
  error?: SerializedError | ServerError
  isLoading: boolean
  userData?: UserModel
}

const AuthSliceInitial: IAuthSliceInitial = {
  error: undefined,
  isLoading: false,
  userData: undefined
}

export const AuthSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(logout.fulfilled, () => AuthSliceInitial)
    builder.addCase(checkTokenValidity.fulfilled, state => state)
    builder.addCase(checkTokenValidity.rejected, () => AuthSliceInitial)
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
  },
  initialState: AuthSliceInitial,
  name: 'authSlice',
  reducers: {}
})

export default AuthSlice.reducer
