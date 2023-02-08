import * as React from 'react';

import { useRecoilState } from 'recoil';

import BalanceState from '../../store/RecoilStore/atoms/BalanceState';
import CountState from '../../store/RecoilStore/atoms/CountState';

import styled from 'styled-components';

const Button = styled.button`
  margin: 0.5em;
  padding: 0.5em;
  background-color: #7bc2fd;
  border-radius: 0.25em;
  border: none;
  cursor: pointer;
  &:first-of-type {
    background: #7bc2fd;
  }
`;

const PerfTestCss = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border-radius: 0.25em;
  height: 2em;
  width: 6em;
  margin-right: 0.5em;
  text-align: right;
`;

let timerId: number | undefined;

const PerfTest: React.FC = () => {
  const [result, setResult] = React.useState<string>('-');
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const [count, setCount] = useRecoilState(CountState);

  // eslint-disable-next-line prefer-const
  let [balance, setBalance] = useRecoilState(BalanceState);

  function runPerfTest() {
    setIsDisabled(true);
    const timeStart = performance.now();

    timerId = window.setInterval(() => {
      for (let i = 0; i <= count; i++) {
        balance += 100;
        setBalance(balance);
      }
      window.clearInterval(timerId);
      const timeEnd = performance.now();
      setResult(` ${Math.round(timeEnd - timeStart)} мс`);
      setIsDisabled(false);
    });
  }

  return (
    <PerfTestCss>
      <hr style={{ width: '100px' }} />

      <Button disabled={isDisabled} onClick={runPerfTest}>
        Запуск теста производительности
      </Button>

      <p>Введите количество прогонов</p>
      <Input
        data-testid='input-perf-test'
        value={count}
        type='number'
        onChange={(event) => setCount(Number(event.target.value))}
      />
      <p>
        Тест: <b>Добавить к балансу(+100руб) {count} раз</b>
      </p>

      <br />

      <p data-testid='result'>Результат: {result}</p>
    </PerfTestCss>
  );
};

export default PerfTest;
