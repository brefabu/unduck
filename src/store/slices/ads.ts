import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

type Ads = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  qr_url: string;
  notifications: {
      id: number;
      title: string;
      message: string;
      icon: string;
      campaign: any;
  }[];
  regions: {
      id: number;
      name: string;
  }[];
  company: number;
}

type InitialState = {
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null | undefined;
  data: Ads[] | [];
};

// Initial State
const initialState: InitialState = {
  error: null,
  status: 'idle',
  data: []
};

// Async Thunks
export const fetch = createAsyncThunk('ads/fetch', async () => {
  const response: AxiosResponse<any> = await axios.get(`${process.env.REACT_APP_ADS_API_KEY}/ads`);
  
  return response.data;
});

// Slice
const adsSlice = createSlice({
  name: 'adsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetch.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(fetch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const {} = adsSlice.actions;

export default adsSlice.reducer;
