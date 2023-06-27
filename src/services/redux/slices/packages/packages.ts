import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPackages } from '../../api';
import { IItemOfPackage, IOrderPackages, IPackage } from '../../../../utils/utils';

export const getInitialPackages = createAsyncThunk(
  '@@packages/getInitialPackages',
  async (orderId: string) => {
    return getPackages(orderId);
  }
);

export interface IPackagesState {
  status: 'idle' | 'success' | 'loading' | 'failed';
  error: string | undefined;
  orderPackages: IOrderPackages;
}

const initialState: IPackagesState = {
  status: 'idle',
  error: '',
  orderPackages: { orderId: '', packages: [] },
};

const packagesSlice = createSlice({
  name: '@@packages',
  initialState,
  reducers: { resetPackages: () => initialState },
  extraReducers: builder => {
    builder
      .addCase(getInitialPackages.pending, state => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(getInitialPackages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getInitialPackages.fulfilled, (state, action) => {
        state.status = 'success';
        state.orderPackages = action.payload;
      });
  },
});

export const { resetPackages } = packagesSlice.actions;

export const packagesReducer = packagesSlice.reducer;

export const selectPackages = (state: { orderPackages: IPackagesState }) => state.orderPackages;
