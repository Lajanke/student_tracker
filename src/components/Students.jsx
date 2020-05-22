import React from 'react';
import StudentCard from './StudentCard';
import axios from 'axios';
import StudentFilter from './StudentFilter';
import { changeBlockSlug } from '../utils';

class Students extends React.Component {
    state = {
        students: [],
        isLoading: true,
    }

    componentDidMount() {
        this.fetchStudents()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.graduated !== this.props.graduated) {
            this.fetchStudents()
        }
    }

    fetchStudents() {
        const { graduated } = this.props
        axios.get('https://nc-student-tracker.herokuapp.com/api/students',
            {
                params: {
                    graduated
                }
            })
            .then(({ data }) => {
                this.setState({ students: changeBlockSlug(data.students), isLoading: false })
            })
    }

//add a student count

    render() {
        if (this.state.isLoading) return <p>LOADING DATA</p>
        return (
            <React.Fragment>
                <div className='filter'>
                    <h2>Students</h2>
                    <StudentFilter />
                </div>
                <ul>
                    {this.state.students.map((student) => {
                        return (
                            <li key={student._id}>
                                <StudentCard student={student} />
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Students;