import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkResponse } from '../../../../utils/utils';
import type { IItem } from '../../../../utils/orderExamples';
import OrderService from './orderApi';

interface IOrder {
  orderId: string | null;
  items: IItem[];
}

export interface OrderState {
  order: IOrder;
  status: 'loading' | 'success' | 'failed' | null;
  deletedItems: IItem[];
  scannedItems: number[];
  error: string;
}

const initialState: OrderState = {
  order: {
    orderId: null,
    items: [],
  },
  status: null,
  deletedItems: [],
  scannedItems: [],
  error: '',
};

// Приведенная ниже функция называется thunk и позволяет нам выполнять асинхронную логику: `dispatch(incrementAsync(10))`.
// Обычно используется для выполнения асинхронных запросов.
// это асинхронный экшн
export const getOrders = createAsyncThunk('order/getOrder', async () => {
  try {
    const service = new OrderService();
    const res = await service.getAll();
    return res.data;
  } catch (err: any) {
    return err.messsage;
  }
});

export const exampleSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    deleteItems: (state, action: PayloadAction<number[]>) => {
      let newDeletedItems: IItem[] = [];
      let newItems: IItem[] = [];
      const items = { ...state.order.items };
      items.forEach(item => {
        if (action.payload.includes(item.barcode)) {
          newDeletedItems.push(item);
        } else {
          newItems.push(item);
        }
      });
      state.order.items = newItems;
      state.deletedItems = newDeletedItems;
    },
    scanItems: (state, action: PayloadAction<number>) => {
      state.scannedItems.push(action.payload);
    },
    // getOrderRequest: state => {
    //   console.log('request');
    // },
    // getOrderSuccess: (state, action: PayloadAction<IOrder>) => {
    //   console.log('success');
    //   state.order = action.payload;
    // },
    // getOrderFailed: (state, action) => {
    //   console.log('failed', action.payload);
    // },
  },
  // Поле `extraReducers` позволяет слайсу обрабатывать экшены, определенные в другом месте,
  // включая экшены, сгенерированные createAsyncThunk или в других слайсах.
  extraReducers: builder => {
    builder
      .addCase(getOrders.pending, state => {
        state.status = 'loading';
        console.log('loading');
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.status = 'success';
        console.info('success', action.payload);
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.status = 'failed';
        console.info('failed', action.payload);
      });
  },
});

export const { deleteItems, scanItems } =
  exampleSlice.actions;

export default exampleSlice.reducer;
