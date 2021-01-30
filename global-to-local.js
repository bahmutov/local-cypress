/// <reference types="cypress" />
/// <reference path="./node_modules/cypress/types/cypress-eventemitter.d.ts" />

/**
 * Object `cy` all Cypress API commands.
 * @see https://on.cypress.io/api
 * @type {Cypress.cy & EventEmitter}
 * @example cy.get('button').click()
 * @example cy.get('.result').contains('Expected text')
 */
export const cy = window.cy
