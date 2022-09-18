import * as React from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import BalanceState from '../../store/RecoilStore/atoms/BalanceState';
import Result from '../../store/RecoilStore/atoms/Result';
import Disabled from '../../store/RecoilStore/atoms/Disabled';
import CountState from '../../store/RecoilStore/atoms/CountState';

import Test from '../../store/RecoilStore/selectors/Test';

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
  //balanceState: number;
}

const PerfTest: React.FC<PerfTestProps> = () => {
  const [result, setResult] = React.useState<string>('-');
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const [count, setCount] = useRecoilState(CountState);
  //const [count, setCount] = React.useState<number>(100_000);

  const [, setCurrentBalance] = useRecoilState(BalanceState);
  // const [result] = useRecoilState(Result);
  // const [isDisabled, setDisabled] = useRecoilState(Disabled);

  let AddTest = useRecoilValue(Test);

  console.log('AddTest: ' + AddTest);

  function runPerfTest() {
    setIsDisabled(true);
    const timeStart = performance.now();

    timerId = window.setInterval(() => {
      for (let i = 0; i <= count; i++) {
        setCurrentBalance(AddTest);
        i++;
      }
      window.clearInterval(timerId);
      const timeEnd = performance.now();
      setResult(` ${Math.round(timeEnd - timeStart)} мс`);
      setIsDisabled(false);
    });
  }
  console.log('res:' + result);

  return (
    <PerfTestCss>
      <hr style={{ width: '100px' }} />

      <Button disabled={isDisabled} onClick={runPerfTest}>
        {/* <Button onClick={() => setCurrentBalance(AddTest)}> */}
        Запуск теста производительности
      </Button>

      <p>Введите количество прогонов</p>
      <Input
        value={count}
        type='number'
        onChange={(event) => setCount(Number(event.target.value))}
      />
      <p>
        Тест: <b>Добавить к балансу(+100руб) {count} раз</b>
      </p>

      <br />

      <p>Результат: {result}</p>
    </PerfTestCss>
  );
};

export default PerfTest;
