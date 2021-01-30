/// <reference types="cypress" />
/// <reference path="./node_modules/cypress/types/cypress-eventemitter.d.ts" />
/// <reference path="./node_modules/cypress/types/cy-chai.d.ts" />

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

// SKIP for now, breaks "run all specs" mode
// remove global objects
// delete window.cy
// delete window.Cypress
