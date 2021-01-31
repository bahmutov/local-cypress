// @ts-check
import { cy, beforeEach } from '../..'

beforeEach(() => {
  cy.wrap('foo').should('equal', 'foo')
})
