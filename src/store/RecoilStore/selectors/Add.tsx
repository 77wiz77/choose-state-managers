import { selector } from 'recoil';
import ValueState from '../atoms/ValueState';
import BalanceState from '../atoms/BalanceState';

const Add = selector({
  key: 'Add',
  get: ({ get }) => {
    let value = get(ValueState);
    let balance = get(BalanceState);
    return (balance += value);
  },
});

export default Add;
