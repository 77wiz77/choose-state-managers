import * as React from 'react';

import { useRecoilValue, useRecoilState } from 'recoil';
import ValueState from '../../store/RecoilStore/atoms/ValueState';
import BalanceState from '../../store/RecoilStore/atoms/BalanceState';

import Add from '../../store/RecoilStore/selectors/Add';
import WithDraw from '../../store/RecoilStore/selectors/WithDraw';
import Clear from '../../store/RecoilStore/selectors/Clear';

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

interface BalanceProps {}

const Balance: React.FC<BalanceProps> = () => {
  const [currentValue, setCurrentValue] = useRecoilState(ValueState);
  const [currentBalance, setCurrentBalance] = useRecoilState(BalanceState);

  const AddBalance = useRecoilValue(Add);
  const WithDrawBalance = useRecoilValue(WithDraw);
  const ClearBalance = useRecoilValue(Clear);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>
        Баланс: {Math.round(currentBalance)} руб
      </h2>

      <Input
        value={currentValue}
        type='number'
        onChange={(event) => setCurrentValue(Number(event.target.value))}
      />

      <Button onClick={() => setCurrentBalance(AddBalance)}>Добавить</Button>

      <Button onClick={() => setCurrentBalance(WithDrawBalance)}>
        Убавить
      </Button>

      <Button onClick={() => setCurrentBalance(ClearBalance)}>Очистить</Button>
    </div>
  );
};

export default Balance;
