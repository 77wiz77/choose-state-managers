import React from 'react';

import Balance from './Balance';
import PerfTest from './PerfTest';

import styled from 'styled-components';

import { BalanceState } from '../../store/MobXStore/BalanceState';

const Test = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const balanceState = new BalanceState();

const MobXTest: React.FC = () => {
  return (
    <div>
      <h1 id='reduxtest'>MobX Example</h1>
      <Test>
        <Balance balanceState={balanceState} />
        <PerfTest balanceState={balanceState} />
      </Test>
    </div>
  );
};

export default MobXTest;
