import { selector } from 'recoil';
import BalanceState from '../atoms/BalanceState';

const Test = selector({
  key: 'AddTest',
  get: ({ get }) => {
    let balance = get(BalanceState);
    balance += 100;

    return balance;
  },
});

export default Test;
