import { cy, Cypress, expect, describe, it } from '../..'

describe('When using TypeScript', () => {
  it('works', () => {
    // print all config settings
    console.log(Cypress.config())
    cy.visit('/')
    expect(1).to.equal(1)

    cy.on('window:before:load', () => {})
  })

  Cypress.on('test:before:run', () => {})
})
