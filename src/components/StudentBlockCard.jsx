import React from 'react';
import axios from 'axios';
import { addBlockCount } from '../utils'

class StudentBlockCard extends React.Component {
    state = {
        student: {}
    }

    componentDidMount() {
        this.fetchBlockHistory();
    }

    fetchBlockHistory() {
        const { _id } = this.props.student
        const { student } = this.props
        axios.get(`https://nc-student-tracker.herokuapp.com/api/students/${_id}`)
        .then(({ data }) => {

            this.setState({student: addBlockCount(student, data.student.blockHistory)})
        })
    }

    render() {
        const { name, startingCohort, timesOnBlock } = this.state.student
        return (
            <React.Fragment>
                <div>
                    <h3>{name}</h3>
                    <p>Cohort: {startingCohort}</p>
                </div>
                <div className={`gridBlock count${timesOnBlock}`}>
                    <p>Times on block: {timesOnBlock}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default StudentBlockCard;