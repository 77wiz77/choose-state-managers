import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/ReduxStore/store';

import Balance from './Balance';
import PerfTest from './PerfTest';

import styled from 'styled-components';

const Test = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ReduxTest: React.FC = () => {
  return (
    <Provider store={store}>
<<<<<<< Updated upstream
      <h1 id='reduxtest'>Redux Example</h1>
=======
      <Typography id='reduxtest' variant='h1'>
        Пример многократного рендеринга компонента с помощью Redux
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
    </Provider>
  );
};

export default ReduxTest;
