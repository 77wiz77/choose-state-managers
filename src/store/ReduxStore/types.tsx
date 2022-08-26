import { Action } from 'redux';

export interface BalanceState {
  balance: number;
}

export enum BalanceActionType {
  ADD = 'ADD',
  WITHDRAW = 'WITHDRAW',
}

export interface AddAction extends Action {
  type: BalanceActionType.ADD;
  payload: number;
}

export interface WithdrawAction extends Action {
  type: BalanceActionType.WITHDRAW;
  payload: number;
}

export type BalanceAction = AddAction | WithdrawAction;
