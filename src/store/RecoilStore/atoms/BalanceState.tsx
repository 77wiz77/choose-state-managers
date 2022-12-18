import { atom, atomFamily, selector } from 'recoil';

const BalanceState = atom<number>({
  key: 'BalanceState',
  default: 1000,
});

export default BalanceState;
