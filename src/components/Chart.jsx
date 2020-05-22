import React from 'react';
import { Doughnut } from 'react-chartjs-2';
//import axios from 'axios';

const Chart = () => {

    const data = {
      labels: ['fun', 'fe', 'be', 'proj'],
      datasets: [{
          data: [12, 18, 21, 14], // placeholders
          backgroundColor: [
            '#60adca',
            '#202829',
            '#ba1f31',
            '#f7941d',
            ],
            hoverBackgroundColor: [
            '#78d3f5',
            '#2c3738',
            '#db2a3e',
            '#ffaa45',
            ],
        }]
    };

    return (
      <div>
        <h3>Distribution</h3>
        <Doughnut data={data} />
      </div>
    );
  }



export default Chart;