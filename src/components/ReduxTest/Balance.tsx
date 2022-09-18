import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { add, withdraw, clear } from '../../store/ReduxStore/actions';
import { State } from '../../store/ReduxStore/store';

import styled from 'styled-components';

const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em;
  background-color: #f16ab7;
  border-radius: 0.25em;
  border: none;
  cursor: pointer;
  &:first-of-type {
    background: #7bc2fd;
  }
`;

const Input = styled.input`
  border-radius: 0.25em;
  height: 2em;
  width: 6em;
  margin-right: 0.5em;
  text-align: right;
`;

interface BalanceProps {
  add: (amount: number) => void;
  withdraw: (amount: number) => void;
  clear: (amount: number) => void;
  balance: number;
}

const Balance = ({ add, withdraw, clear, balance }: BalanceProps) => {
  const [currentValue, setCurrentValue] = React.useState<number>(100);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Баланс: {Math.round(balance)} руб</h2>

      <Input
        value={currentValue}
        type='number'
        onChange={(event) => setCurrentValue(Number(event.target.value))}
      />

      <Button id='add-balance' onClick={() => add(currentValue)}>
        Добавить
      </Button>

      <Button onClick={() => withdraw(currentValue)}>Убавить</Button>

      <Button onClick={() => clear(balance)}>Очистить</Button>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  balance: state.balance.balance,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (amount: number) => dispatch(add(amount)),
  withdraw: (amount: number) => dispatch(withdraw(amount)),
  clear: (amount: number) => dispatch(clear(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Balance);
