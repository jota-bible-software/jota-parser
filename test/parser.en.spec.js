import parserRules from '../src/parser-en'
import { data } from './data-en'
import { createSuite } from './mixin.js'

createSuite('Test en', parserRules, data)

