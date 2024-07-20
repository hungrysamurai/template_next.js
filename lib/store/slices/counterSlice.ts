import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: (create) => ({
    increase: create.reducer((state) => {
      state.count = state.count + 1;
    }),
    decrease: create.reducer((state) => {
      state.count = state.count - 1;
    }),
  }),
  selectors: {
    getCounter: (state) => state.count,
  },
});

export const { increase, decrease } = counterSlice.actions;

export const { getCounter } = counterSlice.selectors;

export default counterSlice.reducer;
