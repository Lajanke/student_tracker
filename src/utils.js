const changeBlockSlug = (students) => { // refator to switch?
    const newArray = students.map((student) => {
        const { currentBlock } = student;
        if (currentBlock === 'fun') {
            return { ...student, currentBlock: 'Fundamentals' }
        }
        if (currentBlock === 'fe') {
            return { ...student, currentBlock: 'Frontend' }
        }
        if (currentBlock === 'be') {
            return { ...student, currentBlock: 'Backend' }
        }
        if (currentBlock === 'proj') {
            return { ...student, currentBlock: 'Project' }
        }
        if (currentBlock === 'grad') {
            return { ...student, currentBlock: 'Graduated' }
        } else {
            return student;
        }
    })
    return newArray
}

const addBlockCount = (student, blockHistory) => {
    if (blockHistory.length === 0 || typeof(blockHistory) === 'undefined') {
        return [];
    }

    const { currentBlock } = student
    const count = blockHistory.filter((block) => block.slug === currentBlock).length
    return { ...student, 'timesOnBlock': count }
}


module.exports = { changeBlockSlug, addBlockCount }