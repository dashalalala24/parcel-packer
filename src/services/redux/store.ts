import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import notificationReducer from './slices/notification/notification';
import { orderReducer } from './slices/order/order';
import asyncDispatchMiddleware from './middleware/asyncDispatchMiddleware';
import { scannedDataReducer } from './slices/scannedData/scannedData';
import { packagesReducer } from './slices/packages/packages';

const rootReducer = combineReducers({
  notification: notificationReducer,
  order: orderReducer,
  scannedData: scannedDataReducer,
  packages: packagesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(asyncDispatchMiddleware),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store);
