import parserRules from '../src/parser-en-US.js'
import { data } from './data-en-US.js'
import { createSuite } from './mixin.js'

createSuite('Test en-US', parserRules, data)

