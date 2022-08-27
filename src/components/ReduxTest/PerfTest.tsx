import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { add } from '../../store/ReduxStore/actions';
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

const PerfTestCss = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const ITERATION_COUNT = 100_000;
let timerId: number | undefined;

interface PerfTestProps {
  add: (amount: number) => void;
}

const PerfTest: React.FC<PerfTestProps> = ({ add }) => {
  const [result, setResult] = React.useState<string>('-');
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  function runPerfTest() {
    setIsDisabled(true);
    const timeStart = performance.now();

    timerId = window.setInterval(() => {
      for (let i = 0; i <= ITERATION_COUNT; i++) {
        add(100);
        i++;
      }

      window.clearInterval(timerId);
      const timeEnd = performance.now();
      setResult(` ${Math.round(timeEnd - timeStart)} milliseconds`);
      setIsDisabled(false);
    });
  }

  return (
    <PerfTestCss>
      <hr style={{ width: '100px' }} />

      <Button disabled={isDisabled} onClick={runPerfTest}>
        Run performance test
      </Button>

      <p>
        Test case: <b>Add balance(+100$) {ITERATION_COUNT} times</b>
      </p>

      <br />

      <p>Result: {result}</p>
    </PerfTestCss>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (amount: number) => dispatch(add(amount)),
});

export default connect(null, mapDispatchToProps)(PerfTest);
