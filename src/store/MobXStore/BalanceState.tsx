import { makeAutoObservable } from 'mobx';

export class BalanceState {
  balance = 1000;

  constructor() {
    makeAutoObservable(this);
  }

  add(value: number) {
    this.balance = this.balance + value;
  }

  withdraw(value: number) {
    this.balance = this.balance - value;
  }

  clear() {
    this.balance = 0;
  }
}
