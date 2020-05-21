import React from 'react';
import StudentCard from './StudentCard';
import axios from 'axios';
import StudentFilter from './StudentFilter';

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
        console.log(this.props)
        const { graduated } = this.props
        axios.get('https://nc-student-tracker.herokuapp.com/api/students',
            {
                params: {
                    graduated: graduated
                }
            })
            .then(({ data }) => {
                this.setState({ students: data.students, isLoading: false })
            })
    }

    render() {
        if (this.state.isLoading) return <p>LOADING DATA</p>
        return (
            <React.Fragment> 
                <h2>Students</h2>
                <StudentFilter />
                <ul>
                    {this.state.students.map((student) => {
                        return (
                            <li key={`${student.name}${student._id}`}>
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