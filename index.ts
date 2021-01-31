/// <reference types="cypress" />
// /// <reference path="./node_modules/cypress/types/cypress-eventemitter.d.ts" />
/// <reference path="./node_modules/cypress/types/cy-chai.d.ts" />

// Cypress, cy, Log inherits EventEmitter.
type EventEmitter2 = import('eventemitter2').EventEmitter2

interface EventEmitter extends EventEmitter2 {
  proxyTo: (cy: Cypress.cy) => null
  emitMap: (eventName: string, args: any[]) => Array<(...args: any[]) => any>
  emitThen: (eventName: string, args: any[]) => Bluebird.BluebirdStatic
}

// Copied from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/events.d.ts
// to avoid type conflict.
interface NodeEventEmitter {
  addListener(event: string | symbol, listener: (...args: any[]) => void): this
  on(event: string | symbol, listener: (...args: any[]) => void): this
  once(event: string | symbol, listener: (...args: any[]) => void): this
  removeListener(
    event: string | symbol,
    listener: (...args: any[]) => void,
  ): this
  off(event: string | symbol, listener: (...args: any[]) => void): this
  removeAllListeners(event?: string | symbol): this
  setMaxListeners(n: number): this
  getMaxListeners(): number
  listeners(event: string | symbol): Array<(...args: any[]) => void>
  rawListeners(event: string | symbol): Array<(...args: any[]) => void>
  emit(event: string | symbol, ...args: any[]): boolean
  listenerCount(type: string | symbol): number
  // Added in Node 6...
  prependListener(
    event: string | symbol,
    listener: (...args: any[]) => void,
  ): this
  prependOnceListener(
    event: string | symbol,
    listener: (...args: any[]) => void,
  ): this
  eventNames(): Array<string | symbol>
}

type cy = Cypress.cy & EventEmitter
type Cypress = Cypress.Cypress & EventEmitter

/**
 * Object `cy` all Cypress API commands.
 * @see https://on.cypress.io/api
 * @type {Cypress.cy & EventEmitter}
 * @example
 *  cy.get('button').click()
 *  cy.get('.result').contains('Expected text')
 */
// @ts-ignore
export const cy: cy = window.cy

/**
 * Holds bundled Cypress utilities and constants.
 * @see https://on.cypress.io/api
 * @type {Cypress.Cypress & EventEmitter}
 * @example
 *  Cypress.config("pageLoadTimeout") // => 60000
 *  Cypress.version // => "6.3.0"
 *  Cypress._ // => Lodash _
 */
// @ts-ignore
export const Cypress: Cypress = window.Cypress

/**
 * Chai assertion
 * @example expect('hello').to.equal('hello')
 * @type {Chai.ExpectStatic}
 */
// @ts-ignore
export const expect: Chai.ExpectStatic = window.expect

/**
 * Chai assertion
 * @type {Chai.AssertStatic}
 */
// @ts-ignore
export const assert: Chai.AssertStatic = window.assert

// Mocha's globals as local variables
export const describe: Mocha.SuiteFunction = window.describe
export const context: Mocha.SuiteFunction = window.context
export const xdescribe: Mocha.PendingSuiteFunction = window.xdescribe
export const xcontext: Mocha.PendingSuiteFunction = window.xcontext
export const before: Mocha.HookFunction = window.before
export const beforeEach: Mocha.HookFunction = window.beforeEach
export const after: Mocha.HookFunction = window.after
export const afterEach: Mocha.HookFunction = window.afterEach
export const it: Mocha.TestFunction = window.it
export const test: Mocha.TestFunction = window.test
export const xit: Mocha.PendingTestFunction = window.xit

// SKIP for now, breaks "run all specs" mode
// remove global objects
// delete window.cy
// delete window.Cypress
