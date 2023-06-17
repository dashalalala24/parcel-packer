import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/example/example';
import notificationReducer from './slices/notification/notification';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
