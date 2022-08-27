import {
  BalanceActionType,
  AddAction,
  WithdrawAction,
  ClearAction,
} from './types';

export const add = (amount: number): AddAction => ({
  type: BalanceActionType.ADD,
  payload: amount,
});

export const withdraw = (amount: number): WithdrawAction => ({
  type: BalanceActionType.WITHDRAW,
  payload: amount,
});

export const clear = (amount: number): ClearAction => ({
  type: BalanceActionType.CLEAR,
  payload: amount,
});
