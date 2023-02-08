import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import TablesData from '../../data/TablesData/TablesData.json';

const Graph: React.FC = () => {
  const [chartData, setChartData] = useState({});

  return (
    <div>
      {/* {data.map((chart, i) => (
        <Line key={i} data={chart} />
      ))} */}
    </div>
  );
};

export default Graph;
