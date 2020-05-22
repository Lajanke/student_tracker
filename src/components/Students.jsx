import React from 'react';
import StudentCard from './StudentCard';
import axios from 'axios';
import StudentFilter from './StudentFilter';
import { changeBlockSlug } from '../utils';
import StudentAdder from './StudentAdder';

class Students extends React.Component {
    state = {
        students: [],
        isLoading: true,
        graduated: false,
    }

    componentDidMount() {
        this.fetchStudents()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.graduated !== this.props.graduated) {
            this.fetchStudents()
        }
    }

    fetchStudents = () => {
        const { graduated } = this.props
        axios.get('https://nc-student-tracker.herokuapp.com/api/students',
            {
                params: {
                    graduated
                }
            })
            .then(({ data }) => {
                this.setState({ students: changeBlockSlug(data.students), isLoading: false, graduated: this.props.graduated })
            })
    }

    addStudentToList = (newStudent) => {
        this.setState((currentState) => {
            return {
                students: [newStudent, ...currentState.students]
            }
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
                    <StudentAdder addStudentToList={this.addStudentToList}/>
                </div>
                {console.log(this.props.graduated)}
                {this.props.graduated === 'true' &&
                    <h3>{this.state.students.length} students have graduated</h3>
                }
                {this.props.graduated === 'false' &&
                    <h3>{this.state.students.length} current students</h3>
                }
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