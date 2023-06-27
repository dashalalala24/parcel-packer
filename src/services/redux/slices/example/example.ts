import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGetOrder } from './exampleAPI';

export interface ExapmleState {
  value: number;
  status: 'success' | 'loading' | 'failed';
}

const initialState: ExapmleState = {
  value: 0,
  status: 'success',
};

// Приведенная ниже функция называется thunk и позволяет нам выполнять асинхронную логику: `dispatch(incrementAsync(10))`.
// Обычно используется для выполнения асинхронных запросов.
export const getOrder = createAsyncThunk('order/fetchGetOrder', async () => {
  const response = await fetchGetOrder();
  return response.data;
});

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  // Поле "reducers" позволяет нам определять редьюсеры и генерировать связанные с ними экшены
  reducers: {
    increment: state => {
      // Redux Toolkit позволяет нам писать "мутирующую" логику в редьюсерах.
      // На самом деле это не мутирует состояние, потому что тулкит использует библиотеку Immer,
      // которая обнаруживает изменения и создает новое немутированное состояние на основе этих изменений
      state.value += 1;
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
      .addCase(getOrder.pending, state => {
        state.status = 'loading';
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.status = 'success';
        state.value += action.payload;
      })
      .addCase(getOrder.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

export default exampleSlice.reducer;
