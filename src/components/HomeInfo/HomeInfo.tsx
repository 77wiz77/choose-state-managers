import React from 'react';
import Typography from '@mui/material/Typography';
import { HomeInfoData } from '../../data/HomePage/HomeInfoData';

const HomeInfo: React.FC = () => {
  return (
    <div>
      {HomeInfoData.map((item) => (
        <div key={item.id}>
          <Typography variant='subtitle1'>{item.name}</Typography>
          <Typography variant='body1'>{item.text}</Typography>
        </div>
      ))}
    </div>
  );
};

export default HomeInfo;
