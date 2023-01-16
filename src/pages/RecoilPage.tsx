import React from 'react';
import RecoilTest from '../components/RecoilTest/RecoilTest';

import { Typography } from '@mui/material';

const RecoilPage: React.FC = () => {
  const info: string = 'Recoil.';
  return (
    <div>
      <Typography variant='h1' id='description'>
        О Recoil
      </Typography>
      {info}
      <RecoilTest />
    </div>
  );
};

export default RecoilPage;
