import parserRules from '../src/parser-pl'
import { data } from './data-pl'
import { createSuite } from './mixin.js'

createSuite('Test pl', parserRules, data)

