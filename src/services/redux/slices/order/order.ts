import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOrder } from './orderApi';
import { compareArrays, compareArraysAndDeleteUnique } from '../../../../utils/utils';
// import { fetchCount } from './exampleAPI';

export interface OrderState {
  order: {};
  status: 'loading' | 'success' | 'failed' | null;
  barcodes: number[];
  deletedItems: number[];
  // scannedItems: number[];
  error: string;
}

const initialState: OrderState = {
  order: {},
  status: null,
  barcodes: [],
  deletedItems: [],
  // scannedItems: [],
  error: '',
};

// Приведенная ниже функция называется thunk и позволяет нам выполнять асинхронную логику: `dispatch(incrementAsync(10))`.
// Обычно используется для выполнения асинхронных запросов.
// это асинхронный экшн
export const getOrders = createAsyncThunk('order/getOrder', async () => {
  //
  try {
    const response = await getOrder();
    return response.data;
  } catch (err) {
    return err;
  }
});

export const exampleSlice = createSlice({
  name: 'order',
  initialState,
  // Поле "reducers" позволяет нам определять редьюсеры и генерировать связанные с ними экшены
  reducers: {
    deleteItemsFromList: (state, action: PayloadAction<number[]>) => {
      const barcodes = state.barcodes;
      let newOrder: number[] = [];
      let deletedItemsList: number[] = [];
      deletedItemsList.concat(action.payload);
      state.deletedItems = deletedItemsList;

      newOrder = compareArraysAndDeleteUnique(barcodes, deletedItemsList);
      state.order = newOrder;
    },
    scanAllItems: (state, action: PayloadAction<number[]>) => {
      const barcodes = state.barcodes;
      let scannedItems: number[] = [];
      scannedItems.concat(action.payload);
      // state.scannedItems = scannedItems;

      compareArrays(barcodes, scannedItems);
    },
  },
  // Поле `extraReducers` позволяет слайсу обрабатывать экшены, определенные в другом месте,
  // включая экшены, сгенерированные createAsyncThunk или в других слайсах.
  extraReducers: builder => {
    builder
      .addCase(getOrders.pending, state => {
        state.status = 'loading';
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.status = 'success';
        // state.order = action.payload;
      })
      .addCase(getOrders.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { deleteItemsFromList } = exampleSlice.actions;

export default exampleSlice.reducer;
