import { test } from 'ava-spec'
import { runShakti } from 'shakti-node'

const isIntegerTestCases = [
  { input: '"Hello"', expectedResult: 0 },
  { input: 1.1, expectedResult: 0 },
  { input: 1, expectedResult: 1 },
  { input: 10, expectedResult: 1 },
  { input: '1 2 3', expectedResult: 1 },
]

const loadType = '. "\\\\l ./k/type.k";'

isIntegerTestCases.forEach(({ input, expectedResult }) => {
  const functionCallKcode = `result: .type.isInteger[${input}]`
  test(`${functionCallKcode} should return ${expectedResult}`, t => {
    t.deepEqual(runShakti(`${loadType}${functionCallKcode}`), expectedResult)
  })
})
