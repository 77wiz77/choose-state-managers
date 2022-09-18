import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { BalanceState } from '../../store/MobXStore/BalanceState';

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

interface PerfTestProps {
  balanceState: BalanceState;
}

const PerfTest: React.FC<PerfTestProps> = observer(({ balanceState }) => {
  const [result, setResult] = React.useState<string>('-');
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const [count, setCount] = React.useState<number>(100_000);

  function runPerfTest() {
    setIsDisabled(true);
    const timeStart = performance.now();

    timerId = window.setInterval(() => {
      for (let i = 0; i <= count; i++) {
        balanceState.add(100);
        // i++;
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

      <p>Введите количество прогонов</p>
      <Input
        value={count}
        type='number'
        onChange={(event) => setCount(Number(event.target.value))}
      />

      <Button disabled={isDisabled} onClick={runPerfTest}>
        Запуск теста производительности
      </Button>

      <p>
        Тест: <b>Добавить к балансу(+100руб) {count} раз</b>
      </p>

      <br />

      <p>Результат: {result}</p>
    </PerfTestCss>
  );
});

export default PerfTest;
