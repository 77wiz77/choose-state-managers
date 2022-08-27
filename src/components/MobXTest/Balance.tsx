import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { BalanceState } from '../../store/MobXStore/BalanceState';

import styled from 'styled-components';

const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em;
  background-color: lightsalmon;
  border-radius: 0.25em;
  border: none;
  cursor: pointer;
  &:first-of-type {
    background: palegreen;
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
  balanceState: BalanceState;
}

const Balance: React.FC<BalanceProps> = observer(({ balanceState }) => {
  const [currentValue, setCurrentValue] = React.useState<number>(100);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>
        Balance: {Math.round(balanceState.balance)} $
      </h2>

      <Input
        value={currentValue}
        type='number'
        onChange={(event) => setCurrentValue(Number(event.target.value))}
      />

      <Button onClick={() => balanceState.add(currentValue)}>Add</Button>

      <Button onClick={() => balanceState.withdraw(currentValue)}>
        Widthdraw
      </Button>

      <Button onClick={() => balanceState.clear()}>Clear</Button>
    </div>
  );
});

export default Balance;
