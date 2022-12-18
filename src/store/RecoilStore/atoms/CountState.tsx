import { atom } from 'recoil';

const CountState = atom({
  key: 'CountState',
  default: 100_000,
});

export default CountState;
