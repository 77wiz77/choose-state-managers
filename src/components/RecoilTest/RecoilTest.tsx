import React from 'react';

import { RecoilRoot } from 'recoil';

import Balance from './Balance';
import PerfTest from './PerfTest';

import styled from 'styled-components';

const Test = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const RecoilTest: React.FC = () => {
  return (
    <RecoilRoot>
      <h1 id='recoiltest'>Recoil Example</h1>
      <Test>
        <Balance />
        <PerfTest />
      </Test>
    </RecoilRoot>
  );
};

export default RecoilTest;
