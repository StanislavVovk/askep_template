import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from 'store/auth/authSlice'
import { Auth, Template, Storage } from 'services/service'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['userData'], // Вказуємо, яке поле userData слід зберігати.
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  authReducer: persistReducer(authPersistConfig, authReducer)
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: {
          extraArgument: {
            service: {
              Auth,
              Template,
              Storage
            }
          }
        }
      })
  })

export const store = setupStore()

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
