import React from 'react';
import { Doughnut } from 'react-chartjs-2';
//import axios from 'axios';

class Chart extends React.Component {
state = {
    blocks: ['fun', 'fe', 'be', 'proj'],
    //isLoading: true,
}

  render() {
    const data = {
      labels: this.state.blocks,
      datasets: [{
          data: [12, 18, 21, 14], // placeholders
          backgroundColor: [
            '#60adca',
            '#202829',
            '#ba1f31',
            '#000000',
            ],
            hoverBackgroundColor: [
            '#78d3f5',
            '#2c3738',
            '#db2a3e',
            '#242323',
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

}

export default Chart;