const changeBlockSlug = (students) => { // refator to switch?
    const newArray =  students.map((student) => {
        const {currentBlock} = student;
        if (currentBlock === 'fun') {
            return {...student, currentBlock: 'Fundamentals'}
        };
        if (currentBlock === 'fe') {
            return {...student, currentBlock: 'Frontend'}
        };
        if (currentBlock === 'be') {
            return {...student, currentBlock: 'Backend'}
        };
        if (currentBlock === 'proj') {
            return {...student, currentBlock: 'Project Stage'}
        };
        if (currentBlock === 'grad') {
            return {...student, currentBlock: 'Graduated'}
        };
    })
    return newArray
}

module.exports = { changeBlockSlug }