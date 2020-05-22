import React from 'react';
//import StudentCard from './StudentCard';
import axios from 'axios';
import BlocksFilter from './BlocksFilter';
import Chart from './Chart';
import StudentCard from './StudentCard';

class Blocks extends React.Component {
    state = {
        studentsOnBlock: [],
        isLoading: true,
    }

    componentDidMount() {
        this.fetchStudentsOnBlock()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.block !== this.props.block) {
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
                <div className='filter'>
                <h2>Blocks</h2>
                <BlocksFilter />
                </div>
                <ul>   
                    {this.state.studentsOnBlock.map((student) => { //Need to use a util to add number of times on block, accessed on students/:id endpoint. Different card?
                        return (
                            <li key={student._id}>
                                <StudentCard student={student} /> 
                            </li>
                        )
                    })}
                </ul>
                <Chart/>
            </React.Fragment>
        )
    }
}

export default Blocks;