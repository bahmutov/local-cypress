/// <reference types="cypress" />
/// <reference path="./node_modules/cypress/types/cy-chai.d.ts" />

type cy = Cypress.cy & CyEventEmitter
type Cypress = Cypress.Cypress & CyEventEmitter

/**
 * Object `cy` all Cypress API commands.
 * @see https://on.cypress.io/api
 * @type {Cypress.cy & CyEventEmitter}
 * @example
 *  cy.get('button').click()
 *  cy.get('.result').contains('Expected text')
 */
// @ts-ignore
export const cy: cy = window.cy

/**
 * Holds bundled Cypress utilities and constants.
 * @see https://on.cypress.io/api
 * @type {Cypress.Cypress & CyEventEmitter}
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
