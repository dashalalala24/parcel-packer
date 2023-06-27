import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrder } from '../../api';
import { IItemOfOrder } from '../../../../utils/utils';

export const getInitialOrder = createAsyncThunk('@@order/getInitialOrder', async () => {
  return getOrder();
});

export interface IOrder {
  orderId: string;
  items: IItemOfOrder[];
}

export interface IOrderState {
  // orderId: string;
  // items: IItemOfOrder[];

  status: 'idle' | 'success' | 'loading' | 'failed';
  error: string | undefined;
  order: IOrder;
}

const initialState: IOrderState = {
  // orderId: '',
  // items: [],
  status: 'idle',
  error: '',
  order: { orderId: '', items: [] },
};

const orderSlice = createSlice({
  name: '@@order',
  initialState,
  reducers: { resetOrder: () => initialState },
  extraReducers: builder => {
    builder
      .addCase(getInitialOrder.pending, state => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(getInitialOrder.rejected, (state, action) => {
        // console.log(action);
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getInitialOrder.fulfilled, (state, action) => {
        state.status = 'success';
        state.order = action.payload;
      });
  },
});

export const { resetOrder } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;

export const selectOrder = (state: { order: IOrderState }) => state.order;
