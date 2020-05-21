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
            data: [2, 8, 6, 1], //placeholders
            backgroundColor: [
            '#f0e2e1',
            '#202829',
            '#ba1f31',
            '#000000',
            ],
            hoverBackgroundColor: [
            '#fffafa',
            '#2c3738',
            '#db2a3e',
            '#242323',
            ],
        }],
    };

    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }

}

export default Chart;