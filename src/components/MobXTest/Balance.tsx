import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { BalanceState } from '../../store/MobXStore/BalanceState';

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
  balanceState: BalanceState;
}

const Balance: React.FC<BalanceProps> = observer(({ balanceState }) => {
  const [currentValue, setCurrentValue] = React.useState<number>(100);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>
        Баланс: {Math.round(balanceState.balance)} руб
      </h2>

      <Input
        value={currentValue}
        type='number'
        onChange={(event) => setCurrentValue(Number(event.target.value))}
      />

      <Button onClick={() => balanceState.add(currentValue)}>Добавить</Button>

      <Button onClick={() => balanceState.withdraw(currentValue)}>
        Убавить
      </Button>

      <Button onClick={() => balanceState.clear()}>Очистить</Button>
    </div>
  );
});

export default Balance;
