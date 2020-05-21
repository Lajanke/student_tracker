import React from 'react';
import { Link } from '@reach/router' 

const Nav = () => {
    return (
        <div className='nav'>
            <Link to='/students'>
                <p>STUDENTS</p>
            </Link>
            <Link to='/blocks'>
                <p>BLOCKS</p>
            </Link>
        </div>
    )
}

export default Nav;