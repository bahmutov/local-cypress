// @ts-check
import { cy } from '../..'

beforeEach(() => {
  cy.wrap('foo').should('equal', 'foo')
})
