import React from 'react';

function StudentCard(props) {
    const { name, startingCohort, currentBlock } = props.student

    return (
        <React.Fragment>
                    <div>
                    <h3>{name}</h3>
                    <p>Cohort: {startingCohort}</p>
                    </div>
                    <div className='blockGrid'>
                    {currentBlock === 'graduated' &&
                        <p>Graduated</p>
                    }
                    {currentBlock !== 'graduated' &&
                        <p>{currentBlock}</p>
                    } 
                    </div>
        </React.Fragment>
    )
}

export default StudentCard;

//Alter block names to full name.