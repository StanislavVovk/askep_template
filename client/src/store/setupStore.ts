import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Auth, Storage, Template } from 'services/service'
import authReducer from 'store/auth/authSlice'
import templateReducer from 'store/template/teplateSlice'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['userData']
}

const persistConfig = {
  key: 'root',
  storage,
  version: 1
}

const rootReducer = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer),
  templateReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () =>
  configureStore({
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: {
          extraArgument: {
            service: {
              Auth,
              Storage,
              Template
            }
          }
        }
      }),
    reducer: persistedReducer
  })

export const store = setupStore()

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
