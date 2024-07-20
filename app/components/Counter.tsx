'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import {
  decrease,
  getCounter,
  increase,
} from '@/lib/store/slices/counterSlice';

const Counter = () => {
  const count = useAppSelector(getCounter);
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        +
      </button>
      <span
        style={{
          fontSize: 36,
        }}
      >
        {count}
      </span>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        -
      </button>
    </>
  );
};

export default Counter;
