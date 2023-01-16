import React from 'react';
import Typography from '@mui/material/Typography';
import HomeInfo from '../components/HomeInfo/HomeInfo';

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant='h1'>
        Добро пожаловать! Данный сайт поможет вам в выборе библиотеки для
        управления состоянием в React
      </Typography>

      <Typography variant='h2'>
        Характеристики по которым происходит сравнение:
      </Typography>
      <HomeInfo />
    </div>
  );
};

export default Home;
