import { BalanceAction, BalanceActionType, BalanceState } from './types';

const initialState: BalanceState = {
  balance: 1000,
};

export const balanceReducer = (
  state: BalanceState = initialState,
  action: BalanceAction
): BalanceState => {
  switch (action.type) {
    case BalanceActionType.ADD:
      return { ...state, balance: state.balance + action.payload };

    case BalanceActionType.WITHDRAW:
      return { ...state, balance: state.balance - action.payload };

    case BalanceActionType.CLEAR:
      return { ...state, balance: state.balance - action.payload };

    default:
      return state;
  }
};
