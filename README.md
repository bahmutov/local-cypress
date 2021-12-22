# local-cypress
[![ci status][ci image]][ci url] [![badges status][badges image]][badges url] [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-9.2.0-brightgreen)
> Use Cypress without global objects, read [the blog post](https://glebbahmutov.com/blog/local-cypress/)

The objects are still attached to the `window` object during the test, but the types are no longer global, you need to explicitly import them from this package.

# WORK IN PROGRESS ⚠️

- [x] local `cy` and `Cypress` object types
- [x] local `expect` and `assert` assertion types
- [x] local Mocha's `describe`, `it`, etc types
- [x] missing EventEmitter and NodeEventEmitter types
- [ ] uses relative path `cy-chai.d.ts`

## Install

```shell
npm install -D local-cypress
# or
yarn add -D local-cypress postinstall-postinstall
```

## Use

In your spec files, instead of using global variables like `cy` and `expect`, import them

```js
// cypress/integration/spec.js
import { cy, Cypress, expect, it } from 'local-cypress'

it('works', () => {
  console.log(Cypress.config())
  cy.visit('/')
  expect(1).to.equal(1)
})
```

## Examples

- Read [How to Avoid Using Global Cypress Variables](https://glebbahmutov.com/blog/local-cypress/)
- [local-cypress-and-jest-typescript-example](https://github.com/bahmutov/local-cypress-and-jest-typescript-example)

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2021

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/local-cypress/issues) on Github

## MIT License

Copyright (c) 2021 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[ci image]: https://github.com/bahmutov/local-cypress/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/bahmutov/local-cypress/actions
[badges image]: https://github.com/bahmutov/local-cypress/workflows/badges/badge.svg?branch=main
[badges url]: https://github.com/bahmutov/local-cypress/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
