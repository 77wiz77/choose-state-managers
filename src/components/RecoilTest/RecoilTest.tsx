import React from 'react';

import { RecoilRoot } from 'recoil';

import Balance from './Balance';
import PerfTest from './PerfTest';
import TableData from '../Table/TableData';

import styled from 'styled-components';
import { Typography } from '@mui/material';

const Test = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const RecoilTest: React.FC = () => {
  return (
    <RecoilRoot>
      <Typography id='recoiltest' variant='h1'>
        Recoil Example
      </Typography>
      <Typography variant='body1'>
        Здесь вы можете наглядно увидеть время многократного рендеринга
        компонента, задав количество прогонов
      </Typography>
      <Test>
        <Balance />
        <PerfTest />
      </Test>
      <Typography variant='h1'>
        Результаты замеров для Redux при 100 000 рендерингов
      </Typography>
      <TableData id={2} />
    </RecoilRoot>
  );
};

export default RecoilTest;
