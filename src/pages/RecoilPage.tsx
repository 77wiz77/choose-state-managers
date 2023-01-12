import React from 'react';
import RecoilTest from '../components/RecoilTest/RecoilTest';

import { Typography } from '@mui/material';

const RecoilPage: React.FC = () => {
  const info: string = 'Recoil.';
  return (
    <div>
      <Typography variant='h1'></Typography>
      <h2 id='description'>Описание</h2>
      {info}
      <RecoilTest />
    </div>
  );
};

export default RecoilPage;
