import React from 'react';
import { Link } from '@reach/router' 

const BlocksFilter = () => {
    return (
        <div>
            <Link to='/blocks/fun'>
                <p>FUNDAMENTALS</p>
            </Link>
            <Link to='/blocks/be'>
                <p>BACKEND</p>
            </Link>
            <Link to='/blocks/fe'>
                <p>FRONTEND</p>
            </Link>
            <Link to='/blocks/proj'>
                <p>PROJECT</p>
            </Link>
        </div>
    )
}

export default BlocksFilter;
