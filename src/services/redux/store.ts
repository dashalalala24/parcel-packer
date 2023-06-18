import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/example/example';
import notificationReducer from './slices/notification/notification';
import asyncDispatchMiddleware from './middleware/asyncDispatchMiddleware';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    notification: notificationReducer,
  },
  middleware: gDM => gDM().concat(asyncDispatchMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
