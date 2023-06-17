import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IItem } from '../../../../utils/orderExamples';

export type TNotification = 'success' | 'fault' | 'systemError' | 'warning' | 'info';

export interface NotificationState {
  message: string | number;
  messageDetails: string;
  type: TNotification;
  isVisible: boolean;
  item: IItem | null;
}

const initialState: NotificationState = {
  message: '',
  messageDetails: '',
  type: 'info',
  isVisible: false,
  item: null,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setSystemError: (state, action: PayloadAction<{ message: number; messageDetails: string }>) => {
      state.message = action.payload.message;
      state.messageDetails = action.payload.messageDetails;
      state.type = 'systemError';
      state.isVisible = true;
    },
    setSuccess: (state, action: PayloadAction<{ message: string }>) => {
      state.message = action.payload.message;
      state.type = 'success';
      state.isVisible = true;
    },
    setInfo: (state, action: PayloadAction<{ message: string }>) => {
      state.message = action.payload.message;
      state.messageDetails = '';
      state.type = 'info';
      state.isVisible = true;
    },
    setFault: (state, action: PayloadAction<{ message: string }>) => {
      state.message = action.payload.message;
      state.messageDetails = '';
      state.type = 'fault';
      state.isVisible = true;
    },
    setWarning: (state, action: PayloadAction<{ message: string; item: IItem }>) => {
      state.message = action.payload.message;
      state.messageDetails = '';
      state.item = action.payload.item;
      state.type = 'warning';
      state.isVisible = true;
    },
    closeNotification: state => {
      state.isVisible = false;
    },
  },
});

export const { closeNotification, setFault, setInfo, setSuccess, setSystemError, setWarning } =
  notificationSlice.actions;

export default notificationSlice.reducer;
