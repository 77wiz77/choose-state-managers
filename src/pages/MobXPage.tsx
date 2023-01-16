import React from 'react';
import MobXTest from '../components/MobXTest/MobXTest';
import { Typography } from '@mui/material';

const MobXPage: React.FC = () => {
  const info: string = '';
  return (
    <div>
      <Typography variant='h1' id='description'>
        О MobX
      </Typography>
      Документация
      {info}
      <MobXTest />
    </div>
  );
};

export default MobXPage;
