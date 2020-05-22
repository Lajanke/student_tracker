import React from 'react';
import axios from 'axios';

class StudentAdder extends React.Component {
    state = {
        name: '',
        startingCohort: '',
    }

    handleInputChange = (event) => {
        console.log(this.state)
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        axios.post('https://nc-student-tracker.herokuapp.com/api/students', this.state)
        .then((response) => {
            this.props.addStudentToList(response.data.student)
        })
        this.setState({
            name: '',
            startingCohort: '',
        })
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmitForm}>
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.handleInputChange} name="name" value={this.state.name}/>
                    <label htmlFor="startingCohort">Cohort:</label>
                    <input onChange={this.handleInputChange} name="startingCohort" value={this.state.startingCohort}/>
                    <button>SUBMIT</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StudentAdder;