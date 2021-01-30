// @ts-check
import { cy } from '../../global-to-local'

beforeEach(() => {
  cy.wrap('foo').should('equal', 'foo')
})
