// @ts-check
import { cy, Cypress, assert, describe, it } from '../..'

describe('Local cy in another spec', () => {
  it('works', () => {
    // print all config settings
    console.log(Cypress.config())
    cy.visit('/')
  })

  it('assert works', () => {
    assert.isAbove(10, 5, '10 is above 5')
  })
})
