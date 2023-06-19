import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkResponse } from '../../../../utils/utils';
import type { IItem } from '../../../../utils/orderExamples';

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
    const res = await fetch('http://127.0.0.1:8000/api/v1/orders/', {
      method: 'GET'
    });
    const data = await checkResponse(res);
    return data;
  } catch (err: any) {
    const error = await err.json();
    return Promise.reject(error.message);
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
        console.log('success', action.payload);
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.status = 'failed';
        // console.log('failed', action.payload);
      });
  },
});

export const { deleteItems, scanItems } = exampleSlice.actions;

export default exampleSlice.reducer;
