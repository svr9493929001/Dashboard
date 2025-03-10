import * as React from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';

const barChartsParams = {
  xAxis: [
    {
      data: ['page A', 'page B', 'page C', 'page D', 'page E'],
      scaleType: 'band',
    },
  ],
  series: [
    { data: [2, 5, 3, 4, 1], stack: '1', label: 'Series x' },
    { data: [10, 3, 1, 2, 10], stack: '1', label: 'Series y' },
    { data: [10, 3, 1, 2, 10], stack: '1', label: 'Series z' },
  ],
  margin: { top: 10, right: 10 },
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
export default function Chart() {
  return (
    <Stack direction="column" >
      <BarChart {...barChartsParams} tooltip={{ trigger: 'axis' }} />
      {/* <BarChart {...barChartsParams} tooltip={{ trigger: 'item' }} /> */}
    </Stack>
  );
}