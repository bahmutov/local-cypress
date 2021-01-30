import { cy, Cypress, expect } from '../..'

describe('When using TypeScript', () => {
  it('works', () => {
    // print all config settings
    console.log(Cypress.config())
    cy.visit('/')
    expect(1).to.equal(1)
  })
})
