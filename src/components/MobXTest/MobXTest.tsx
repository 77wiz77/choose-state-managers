import React from 'react';
import { BalanceState } from '../../store/MobXStore/BalanceState';

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

const balanceState = new BalanceState();

const MobXTest: React.FC = () => {
  return (
    <div>
      <Typography id='mobxtest' variant='body1'>
        Пример многократного рендеринга компонента с помощью MobX
      </Typography>
      <Typography variant='subtitle1'>
        Здесь вы можете наглядно увидеть время многократного рендеринга
        компонента, задав количество прогонов
      </Typography>
      <Test>
        <Balance balanceState={balanceState} />
        <PerfTest balanceState={balanceState} />
      </Test>
      <Typography variant='subtitle1'>
        Пример результатов замера для Redux при 100 000 рендерингов (результаты
        зависят от производительности устройства на котором производится замер и
        на вашем устройстве могут отличаться от указанных ниже)
      </Typography>
      <TableData id={1} />
    </div>
  );
};

export default MobXTest;
