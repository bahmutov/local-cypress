// @ts-check
import { cy, Cypress, expect, describe, it } from '../..'

describe('Local cy', () => {
  it('works', () => {
    // print all config settings
    console.log(Cypress.config())
    cy.visit('/')
  })

  it('has working expect', () => {
    expect(1).to.equal(1)
  })
})
