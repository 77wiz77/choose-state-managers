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
<<<<<<< Updated upstream
      <h1 id='recoiltest'>Recoil Example</h1>
=======
      <Typography id='recoiltest' variant='h1'>
        Пример многократного рендеринга компонента с помощью Recoil
      </Typography>
      <Typography variant='body1'>
        Здесь вы можете наглядно увидеть время многократного рендеринга
        компонента, задав количество прогонов
      </Typography>
>>>>>>> Stashed changes
      <Test>
        <Balance />
        <PerfTest />
      </Test>
    </RecoilRoot>
  );
};

export default RecoilTest;
