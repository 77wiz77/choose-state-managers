import React from 'react';
import ReduxTest from '../components/ReduxTest/ReduxTest';
import Typography from '@mui/material/Typography';

const ReduxPage: React.FC = () => {
  const info: string =
    'Redux представляет собой старейшее решение от компании Facebook в сфере управления состояниями в компонентах. Основная его идея заключается в создании для веб-приложения одного централизованного хранилища (SingleStore), в котором хранятся все состояния компонентов. Благодаря этому, каждый компонент может получить доступ к нужному состоянию, не передавая его из родительского к дочернему, как это реализовано в React Context.';
  return (
    <div>
      <Typography variant='h1'></Typography>
      <h2 id='description'>Описание</h2>
      {info}
      <ReduxTest />
    </div>
  );
};

export default ReduxPage;
