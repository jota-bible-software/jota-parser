import parserRules from '../src/parser-en'
import { data } from './data-common'
import { createSuite
 } from './mixin'

createSuite('Test common rules', parserRules, data)
