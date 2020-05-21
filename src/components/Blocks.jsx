import React from 'react';
//import StudentCard from './StudentCard';
//import axios from 'axios';
import BlocksFilter from './BlocksFilter';
import Chart from './Chart';

class Blocks extends React.Component {
  //state to hold list of students in blocks
    //may use student list again.

    render() {
        return (
            <React.Fragment> 
                <div className='filter'>
                <h2>Blocks</h2>
                <BlocksFilter />
                </div>
                <Chart/>
            </React.Fragment>
        )
    }
}

export default Blocks;