import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/ReduxStore/store';

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

const ReduxTest: React.FC = () => {
  return (
    <Provider store={store}>
      <Typography id='reduxtest' variant='body1'>
        Пример многократного рендеринга компонента с помощью MobX
      </Typography>
      <Typography variant='body1'>
        Здесь вы можете наглядно увидеть время многократного рендеринга
        компонента, задав количество прогонов
      </Typography>
      <Test>
        <Balance />
        <PerfTest />
      </Test>
      <Typography variant='subtitle1'>
        Пример результатов замера для Redux при 100 000 рендерингов
      </Typography>
      <TableData id={0} />
    </Provider>
  );
};

export default ReduxTest;
