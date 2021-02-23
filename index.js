"use strict";
/// <reference types="cypress" />
/// <reference path="./node_modules/cypress/types/cy-chai.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.xit = exports.test = exports.it = exports.afterEach = exports.after = exports.beforeEach = exports.before = exports.xcontext = exports.xdescribe = exports.context = exports.describe = exports.assert = exports.expect = exports.Cypress = exports.cy = void 0;
/**
 * Object `cy` all Cypress API commands.
 * @see https://on.cypress.io/api
 * @type {Cypress.cy & EventEmitter}
 * @example
 *  cy.get('button').click()
 *  cy.get('.result').contains('Expected text')
 */
// @ts-ignore
exports.cy = window.cy;
/**
 * Holds bundled Cypress utilities and constants.
 * @see https://on.cypress.io/api
 * @type {Cypress.Cypress & EventEmitter}
 * @example
 *  Cypress.config("pageLoadTimeout") // => 60000
 *  Cypress.version // => "6.3.0"
 *  Cypress._ // => Lodash _
 */
// @ts-ignore
exports.Cypress = window.Cypress;
/**
 * Chai assertion
 * @example expect('hello').to.equal('hello')
 * @type {Chai.ExpectStatic}
 */
// @ts-ignore
exports.expect = window.expect;
/**
 * Chai assertion
 * @type {Chai.AssertStatic}
 */
// @ts-ignore
exports.assert = window.assert;
// Mocha's globals as local variables
exports.describe = window.describe;
exports.context = window.context;
exports.xdescribe = window.xdescribe;
exports.xcontext = window.xcontext;
exports.before = window.before;
exports.beforeEach = window.beforeEach;
exports.after = window.after;
exports.afterEach = window.afterEach;
exports.it = window.it;
exports.test = window.test;
exports.xit = window.xit;
// SKIP for now, breaks "run all specs" mode
// remove global objects
// delete window.cy
// delete window.Cypress
