import React from 'react';
import Typography from '@mui/material/Typography';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Typography variant='h1'>
        Данный проект создан для помощи в выборе менеджеров управления
        состояниями
      </Typography>
      <Typography variant='body1'>
        Github профиль автора:{' '}
        <a href='https://github.com/77wiz77'>https://github.com/77wiz77</a>
        <br />
        Исходный код проекта:{' '}
        <a href='https://github.com/77wiz77/choose-state-managers'>
          https://github.com/77wiz77/choose-state-managers
        </a>
      </Typography>
    </div>
  );
};

export default AboutPage;
