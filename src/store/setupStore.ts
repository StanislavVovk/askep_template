import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = 2
const slice = createSlice({
  initialState,
  name: 'aaa',
  reducers: {
    add: (state) => state + 1
  }
})
const rootReducer = combineReducers({ reducer: slice.reducer })
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: {
          extraArgument: {}
        }
      })
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
