import { selector } from 'recoil';
import BalanceState from '../atoms/BalanceState';

const Clear = selector({
  key: 'Clear',
  get: ({ get }) => {
    let balance = get(BalanceState);
    return (balance = 0);
  },
});

export default Clear;
