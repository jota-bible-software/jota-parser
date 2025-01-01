import parserRules from '../src/parser-en-US'
import { data } from './data-common'
import { createSuite
 } from './mixin'

createSuite('Test common rules', parserRules, data)
