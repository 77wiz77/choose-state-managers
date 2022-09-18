import { atom, atomFamily, selector } from 'recoil';

const BalanceState = atom({
  key: 'BalanceState',
  default: 1000,
});

export default BalanceState;
