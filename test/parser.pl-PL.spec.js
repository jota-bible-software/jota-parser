import parserRules from '../src/parser-pl-PL.js'
import { data } from './data-pl-PL.js'
import { createSuite } from './mixin.js'

createSuite('Test pl-PL', parserRules, data)

