import React from 'react';
import axios from 'axios';
import StudentBlockCard from './StudentBlockCard';

class Blocks extends React.Component {
    state = {
        studentsOnBlock: [],
        isLoading: true,
    }

    componentDidMount() {
        this.fetchStudentsOnBlock()
    }

    componentDidUpdate(prevProps) {
        const { block } = this.props;
        if (prevProps.block !== block) {
            this.fetchStudentsOnBlock()
        }
    }

    fetchStudentsOnBlock() {
        const { block } = this.props
        axios.get('https://nc-student-tracker.herokuapp.com/api/students',
            {
                params: {
                    block
                }
            })
            .then(({ data }) => {
                this.setState({ studentsOnBlock: data.students, isLoading: false })
            })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.studentsOnBlock[0] &&
                    <h3>{(this.state.studentsOnBlock).length} students</h3>
                }
                <ul>
                    {this.state.studentsOnBlock.map((student) => {
                        return (
                            <li key={student._id}>
                                <StudentBlockCard student={student} />
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Blocks;