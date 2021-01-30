// @ts-check
import { cy, Cypress } from '../../global-to-local'

describe('Local cy', () => {
  it('works', () => {
    // print all config settings
    console.log(Cypress.config())
    cy.visit('/')
  })
})
