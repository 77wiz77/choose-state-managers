import { selector } from 'recoil';
import ValueState from '../atoms/ValueState';
import BalanceState from '../atoms/BalanceState';

const WithDraw = selector({
  key: 'WithDraw',
  get: ({ get }) => {
    const value = get(ValueState);
    let balance = get(BalanceState);
    return (balance = balance - value);
  },
});

export default WithDraw;
