import JotaParser from '../src/parser'

expect.extend({
  toBeValid(actual, expected, input) {
    const pass = JSON.stringify(actual) === JSON.stringify(expected)
    if (pass) {
      return {
        message: () => `Input "${input}" was parsed as "${actual}" which is "${expected}"`,
        pass: true
      }
    } else {
      return {
        message: () => `Input "${input}" was parsed as "${actual}" which is not "${expected}"`,
        pass: false
      }
    }
  }
});

function assertParse(parser, input, expectedOutput) {
  expect(JSON.stringify(parser.parse(input))).toBeValid(JSON.stringify(expectedOutput), input)
}

export function createSuite(title, parserRules, data) {
  describe(title, () => {
    const parser = new JotaParser({ locales: [parserRules] })
    data.forEach(group => {
      it(group.group, () => {
        group.cases.forEach(item => {
          assertParse(parser, item.input, item.expectedOutput)
        })
      })
    })
  })
}

