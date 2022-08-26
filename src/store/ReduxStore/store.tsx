import { combineReducers, createStore } from 'redux';
import { balanceReducer } from './reducers';
import { BalanceState } from './types';

const rootReducer = combineReducers({
  balance: balanceReducer,
});

export interface State {
  balance: BalanceState;
}

export const store = createStore(rootReducer, undefined);
