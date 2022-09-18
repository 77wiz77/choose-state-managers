import { atom } from 'recoil';

const CountState = atom({
  key: 'CountState',
  default: 10_000,
});

export default CountState;
