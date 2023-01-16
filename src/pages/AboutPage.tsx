import React from 'react';
import Typography from '@mui/material/Typography';

const AboutPage: React.FC = () => {
  const info: string =
    'Данный проект создан для помощи в выборе менеджеров управления состояниями';
  return (
    <div>
      <Typography variant='h1'>{info}</Typography>
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
