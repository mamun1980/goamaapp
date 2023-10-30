import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = [200, 123, 534, 754, 342, 644, ];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels,
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     }
//   ],
// };

export default function ChartCard() {
    const [newdata, setNewdata] = useState({
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ],
    })
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
      console.log(checked)
      if(checked) {
        labels.sort()
      } else {
        labels.sort().reverse()
      }

      setNewdata({
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      })

    };

    return (
      <>Asc/Dsc
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Bar options={options} data={newdata} />
      </>
    );
}