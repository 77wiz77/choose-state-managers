import { BalanceActionType, AddAction, WithdrawAction } from './types';

export const add = (amount: number): AddAction => ({
  type: BalanceActionType.ADD,
  payload: amount,
});

export const withdraw = (amount: number): WithdrawAction => ({
  type: BalanceActionType.WITHDRAW,
  payload: amount,
});
