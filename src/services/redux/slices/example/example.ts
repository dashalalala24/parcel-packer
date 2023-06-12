import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { fetchCount } from './exampleAPI';

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
export const incrementAsync = createAsyncThunk('example/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount);
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
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

// // Приведенная ниже функция называется селектором и позволяет нам выбрать значение из
// // стейта. Селекторы также могут быть определены внутри компонента React, где они и используются.
// // Например:  `useSelector((state: RootState) => state.example.value)`
// export const selectCount = (state: RootState) => state.example.value;

// // Мы также можем написать thunks вручную, они могут содержать как синхронную, так и асинхронную логику.
// // Вот пример условной отправки экшенов на основе текущего состояния.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default exampleSlice.reducer;
