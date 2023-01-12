import React from 'react';
import Typography from '@mui/material/Typography';
import { LibraryInfoData } from '../../data/LibraryPage/LibraryInfoData';

const LibraryInfo: React.FC = () => {
  console.log(LibraryInfoData);
  return (
    <div>
      <div key={LibraryInfoData[0].id}>
        <Typography variant='subtitle1'>
          {LibraryInfoData[0].library}
        </Typography>
        <Typography variant='body1'>
          {LibraryInfoData[0].body.map((item) => (
            <Typography variant='body2'>{item.name}</Typography>
          ))}
        </Typography>
      </div>
    </div>
  );
};

export default LibraryInfo;
