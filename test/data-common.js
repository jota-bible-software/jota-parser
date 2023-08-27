export const data = [
  {
    group: 'Case insensitive', cases: [
      { input: 'Gen 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'gen 1:2', expectedOutput: [[0, 1, 2]] },
      { input: 'GEN 1:2', expectedOutput: [[0, 1, 2]] },
    ]
  },
  {
    group: 'No spaces', cases: [
      { input: 'Gen1:2', expectedOutput: [[0, 1, 2]] },
      { input: '1Kgs1:2', expectedOutput: [[10, 1, 2]] },
      { input: 'IKgs1:2', expectedOutput: [[10, 1, 2]] },
      { input: 'FirstKgs1:2', expectedOutput: [[10, 1, 2]] },
      { input: '1J1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'IJ1:2', expectedOutput: [[61, 1, 2]] },
      { input: 'FirstJ1:2', expectedOutput: [[61, 1, 2]] },
    ]
  },
  {
    group: 'Chapter only', cases: [
      { input: 'Gen1', expectedOutput: [[0, 1]] },
      { input: 'Gen 1', expectedOutput: [[0, 1]] },
      { input: 'Gen.1', expectedOutput: [[0, 1]] },
      { input: 'Gen,1', expectedOutput: [[0, 1]] },
      { input: 'Gen/1', expectedOutput: [[0, 1]] },
      { input: 'Gen:1', expectedOutput: [[0, 1]] },
      { input: 'Gen;1', expectedOutput: [[0, 1]] },
      { input: 'Gen @#$% 1', expectedOutput: [] },
      // These don't work on purpose, they are opinionated nonsense
      // { input: 'Gen\\1', expectedOutput: [[0, 1]] },
      // { input: 'Gen*1', expectedOutput: [[0, 1]] },
      // { input: 'Gen-1', expectedOutput: [[0, 1]] },
      // { input: 'Gen~1', expectedOutput: [[0, 1]] },
      // { input: 'Gen&1', expectedOutput: [[0, 1]] },
      // { input: 'Gen@1', expectedOutput: [[0, 1]] },
    ]
  },
  {
    group: 'Chapter and verses', cases: [
      { input: 'Gen 11:22', expectedOutput: [[0, 11, 22]] },
      { input: 'Gen 11.22 ', expectedOutput: [[0, 11, 22]] },
      { input: 'Gen 2 3', expectedOutput: [[0, 2, 3]] },
      { input: '1John 2:3', expectedOutput: [[61, 2, 3]] },
      { input: 'Gen 2:3a', expectedOutput: [[0, 2, 3]] },
      { input: 'Gen 2:3:4', expectedOutput: [[0, 2, 3], [0, 2, 4]] },
      { input: 'Gen 2:3-5', expectedOutput: [[0, 2, 3, 5]] },
      { input: 'Gen 2: 3-5', expectedOutput: [[0, 2, 3, 5]] },
      { input: 'Gen 2:3,5', expectedOutput: [[0, 2, 3], [0, 2, 5]] },
      { input: 'Gen 2,3-5', expectedOutput: [[0, 2, 3, 5]] },
      { input: 'Gen 2,3;5', expectedOutput: [[0, 2, 3], [0, 2, 5]] },
      { input: 'Gen 2,3.5', expectedOutput: [[0, 2, 3], [0, 2, 5]] },
      { input: 'Gen Gen 2:3', expectedOutput: [[0, 2, 3]] },
      { input: 'Gen. 1;2-3', expectedOutput: [[0, 1, 2, 3]] },
      { input: 'Ephes. 3,20 ', expectedOutput: [[48, 3, 20]] },
      { input: 'to 100% Gen 2,3', expectedOutput: [[0, 2, 3]] },
      { input: 'Gen 2,3 ,', expectedOutput: [[0, 2, 3]] },
      { input: 'John 1:1 - John 2:2', expectedOutput: [[[42, 1, 1], [42, 2, 2]]] },
    ]
  },
  {
    group: 'Cross chapter ranges', cases: [
      { input: 'Gen 2:3-3:5', expectedOutput: [[[0, 2, 3], [0, 3, 5]]] },
      { input: 'Gen 1:2-3; 3:4-5', expectedOutput: [[0, 1, 2, 3], [0, 3, 4, 5]] },
      { input: 'Gen 2:3-5, 7-8', expectedOutput: [[0, 2, 3, 5], [0, 2, 7, 8]] },
    ]
  },
  {
    group: 'Multiple books', cases: [
      { input: 'aa Gen 2,3 1 John 4:5 bb ', expectedOutput: [[0, 2, 3], [61, 4, 5]] },
      { input: 'John 1:2, 1 John 1:2', expectedOutput: [[42, 1, 2], [61, 1, 2]] },
      { input: '1 John 1:2, John 1:2', expectedOutput: [[61, 1, 2], [42, 1, 2]] },

    ]
  },
  // Not working in jota parser on purpose - multiline should be optional
  // { input: 'Gen\n1', expectedOutput: [[0, 1]] },

]
export default data
