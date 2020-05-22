const { changeBlockSlug } = require('./utils')

const input = [{
    "_id": "5eaab0abee1b3b0017b70718",
    "name": "Joe",
    "startingCohort": 1,
    "currentBlock": "fe"
  }];

  const input2 = [{
    "_id": "5ec69b41acc0e700176363d1",
    "name": "Peter Parker",
    "startingCohort": 0,
    "currentBlock": "fun"
  },
  {
    "_id": "5ea999d9b35aac7b622bada2",
    "name": "Mozell Cassin",
    "startingCohort": 1,
    "currentBlock": "grad"
  },
  {
    "_id": "5ea999d9b35aac7b622bada3",
    "name": "Reynold Muller",
    "startingCohort": 1,
    "currentBlock": "proj"
  },
  {
    "_id": "5eaab0abee1b3b0017b70718",
    "name": "Joe",
    "startingCohort": 1,
    "currentBlock": "fe"
  },
  {
    "_id": "5eaad2e2ee1b3b0017b70721",
    "name": "Paul",
    "startingCohort": 1,
    "currentBlock": "be"
  },]

describe('changeBlockSlug', () => {
    test ('When passed an empty array returns an empty array', () => {
        expect(changeBlockSlug([])).toEqual([]);
    });
    test ('When passed an object array returns all keys', () => {
        const [ output ] = changeBlockSlug(input);

        expect(output).toHaveProperty('_id');
        expect(output).toHaveProperty('name');
        expect(output).toHaveProperty('startingCohort');
        expect(output).toHaveProperty('currentBlock');
    });
    test ('Changes the value of current block to be a full word for one block', () => {

        const [ output ] = changeBlockSlug(input);

        expect(output.currentBlock).toBe('Frontend');
    });
    test ('Changes the value of current block to be a full word for all blocks', () => {

        const output = changeBlockSlug(input2);

        expect(output[0].currentBlock).toBe('Fundamentals');
        expect(output[1].currentBlock).toBe('Graduated');
        expect(output[2].currentBlock).toBe('Project Stage');
        expect(output[3].currentBlock).toBe('Frontend');
        expect(output[4].currentBlock).toBe('Backend');
    });
});
