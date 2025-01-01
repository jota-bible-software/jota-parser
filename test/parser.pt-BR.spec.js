import parserRules from '../src/parser-pt-BR.js'
import { data } from './data-pt-BR.js'
import { createSuite } from './mixin.js'

createSuite('Test pt-BR', parserRules, data)

