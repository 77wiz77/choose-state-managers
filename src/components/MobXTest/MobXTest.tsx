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
<<<<<<< Updated upstream
      <h1 id='reduxtest'>MobX Example</h1>
=======
      <Typography id='reduxtest' variant='h1'>
        Пример многократного рендеринга компонента с помощью MobX
      </Typography>
      <Typography variant='body1'>
        Здесь вы можете наглядно увидеть время многократного рендеринга
        компонента, задав количество прогонов
      </Typography>
>>>>>>> Stashed changes
      <Test>
        <Balance balanceState={balanceState} />
        <PerfTest balanceState={balanceState} />
      </Test>
    </div>
  );
};

export default MobXTest;
