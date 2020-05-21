import React from 'react';
import { Link } from '@reach/router' 

const StudentFilter = () => {
    return (
        <div>
            <Link to='/students/false'>
                <p>CURRENT</p>
            </Link>
            <Link to='/students/true'>
                <p>GRADUATED</p>
            </Link>
        </div>
    )
}

export default StudentFilter;