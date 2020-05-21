import React from 'react';
import StudentCard from './StudentCard';
import axios from 'axios';

class Students extends React.Component {
    state = {
        students: [],
        isLoading: true,
    }

    componentDidMount() {
        this.fetchStudents()
    }

    fetchStudents() {
        axios.get('https://nc-student-tracker.herokuapp.com/api/students')
            .then(({ data }) => {
                this.setState({ students: data.students, isLoading: false })
            })
    }

    render() { 
        if (this.state.isLoading) return <p>LOADING DATA</p>
        return (
            <React.Fragment>
                <h2>Students</h2>
                <ul>
                    {this.state.students.map((student) => {
                        return (
                            <li key={`${student.name}${student._id}`}>
                                <StudentCard student={student}/>
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Students;