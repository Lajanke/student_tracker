import React from 'react';
import axios from 'axios';
import StudentCard from './StudentCard';

class Blocks extends React.Component {
    state = {
        studentsOnBlock: [],
        isLoading: true,
    }

    componentDidMount() {
        console.log('mounted');
        this.fetchStudentsOnBlock()
    }

    componentDidUpdate(prevProps) {
        const { block } = this.props;
        if (prevProps.block !== block)  {  
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
                <ul>   
                    {this.state.studentsOnBlock.map((student) => { //Need to use a util to add number of times on block, accessed on students/:id endpoint. Different cards?
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

export default Blocks;