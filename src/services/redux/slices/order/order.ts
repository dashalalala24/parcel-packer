import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOrder } from './orderApi';
// import { fetchCount } from './exampleAPI';

export interface ExapmleState {
  order: {};
  status: 'loading' | 'success' | 'failed' | null;
  barcodes: number[];
  deletedItems: number[];
}

const initialState: ExapmleState = {
  order: {},
  status: null,
  barcodes: [],
  // error: ''
  deletedItems: [],
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
    deleteItemFromList: (state, action: PayloadAction<number[]>) => {
      const barcodes = { ...state.barcodes };
      barcodes.map(i => console.log(i));
      const newOrder = { 1: 1, 2: 2 };
      const deletedItemsList = [1, 2];
      state.order = newOrder;
      state.deletedItems = deletedItemsList;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Используй тип PayloadAction для объявления содержимого `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
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
        state.order = action.payload;
      })
      .addCase(getOrders.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

export default exampleSlice.reducer;
