import React from 'react';

function StudentCard(props) {
    const { name, startingCohort, currentBlock } = props.student

    return (
        <React.Fragment>
            <h1>{name}</h1>
            <p>Cohort: {startingCohort}</p>
            {currentBlock === 'grad' &&
                <p>Graduated</p>
            }
            {currentBlock !== 'grad' &&
                <p>Current Block: {currentBlock}</p>
            }
            
        </React.Fragment>
    )
}

export default StudentCard;