import { Action, Middleware, PayloadAction } from '@reduxjs/toolkit';

export interface TActionWithAsyncDispatch<P = void, T extends string = string>
  extends PayloadAction<P, T> {
  asyncDispatch: (asyncAction: Action) => void;
}

const asyncDispatchMiddleware: Middleware = store => next => action => {
  let syncActivityFinished = false;
  let actionQueue: Array<Action> = [];

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function asyncDispatch(asyncAction: Action) {
    actionQueue = actionQueue.concat([asyncAction]);

    if (syncActivityFinished) {
      flushQueue();
    }
  }

  const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });

  next(actionWithAsyncDispatch);
  syncActivityFinished = true;
  flushQueue();
};

export default asyncDispatchMiddleware;
