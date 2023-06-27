import { createSlice } from '@reduxjs/toolkit';

// interface IData {
//   scannedData: number | string;
// }

interface IScannedDataState {
  scannedData: number[] | string[];
}

const initialState: IScannedDataState = {
  scannedData: [],
};

const scannedDataSlice = createSlice({
  name: '@@scannedData',
  initialState,
  reducers: {
    setScannedData: (state, action) => {
      state.scannedData = [...state.scannedData, action.payload];
    },
    resetScannedData: () => {
      return initialState;
    },
  },
});

export const { setScannedData, resetScannedData } = scannedDataSlice.actions;

export const scannedDataReducer = scannedDataSlice.reducer;

export const selectScannedData = (state: { scannedData: IScannedDataState }) => {
  return state.scannedData;
};
