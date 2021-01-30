# local-cypress

# WORK IN PROGRESS ⚠️

- local `cy` and `Cypress`
- local `expect` and `assert`

## Install

```shell
npm install -D local-cypress
```

## Use

In your spec files, instead of using global variables like `cy` and `expect`, import them

```js
import { cy, Cypress, expect } from 'local-cypress'

it('works', () => {
  console.log(Cypress.config())
  cy.visit('/')
  expect(1).to.equal(1)
})
```
