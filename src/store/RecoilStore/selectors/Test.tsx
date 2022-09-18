import { selector } from 'recoil';
import BalanceState from '../atoms/BalanceState';
import CountState from '../atoms/CountState';
import Result from '../atoms/Result';
import Disabled from '../atoms/Disabled';

const Test = selector({
  key: 'AddTest',
  // set: ({ set, get }) => {
  //   let balance = get(BalanceState);
  //   let count = get(CountState);
  //   set(Disabled, true);
  //   const timeStart = performance.now();
  //   let timerId = window.setInterval(() => {
  //     for (let i = 0; i <= count; i++) {
  //       balance += 100;
  //       i++;
  //     }
  //     window.clearInterval(timerId);
  //     const timeEnd = performance.now();
  //     set(Disabled, false);
  //     set(Result, ` ${Math.round(timeEnd - timeStart)} milliseconds`);
  //   });
  //   set(BalanceState, balance);
  // },
  get: ({ get }) => {
    let balance = get(BalanceState);
    let count = get(CountState);
    for (let i = 0; i <= count; i++) {
      balance += 100;
    }
    return balance;
  },
});

export default Test;
