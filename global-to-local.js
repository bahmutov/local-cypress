/// <reference types="cypress" />
/// <reference path="./node_modules/cypress/types/cypress-eventemitter.d.ts" />

/**
 * Object `cy` all Cypress API commands.
 * @see https://on.cypress.io/api
 * @type {Cypress.cy & EventEmitter}
 * @example
 *  cy.get('button').click()
 *  cy.get('.result').contains('Expected text')
 */
export const cy = window.cy

/**
 * Holds bundled Cypress utilities and constants.
 * @see https://on.cypress.io/api
 * @type {Cypress.Cypress & EventEmitter}
 * @example
 *  Cypress.config("pageLoadTimeout") // => 60000
 *  Cypress.version // => "6.3.0"
 *  Cypress._ // => Lodash _
 */
export const Cypress = window.Cypress

// remove global objects
delete window.cy
delete window.Cypress
