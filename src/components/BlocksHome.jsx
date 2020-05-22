import React from 'react';
import BlocksFilter from './BlocksFilter';
import Chart from './Chart';
import { Router } from '@reach/router';
import Blocks from './Blocks';

const BlocksHome = () => {
    return (
        <div>
            <React.Fragment>
                <div className='filter'>
                    <h2>Blocks</h2>
                    <BlocksFilter />
                </div>
            </React.Fragment>
            <Router>
                <Chart path='/' />
                <Blocks path=':block' />
            </Router>
        </div>
    )
}

export default BlocksHome;