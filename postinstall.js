// this script patches "cypress" types file to remove global variables
// @ts-check
const path = require('path')
const fs = require('fs')
const debug = require('debug')('local-cypress')

// returns the types folder
function findCypressTypes() {
  const cypressAt = require.resolve('cypress')
  debug('Cypress found at %s', cypressAt)
  const cypressFolder = path.dirname(cypressAt)
  const typesFolder = path.join(cypressFolder, 'types')
  return typesFolder
}

function noGlobalCy() {
  const typesFolder = findCypressTypes()
  const cypressTypesFilename = path.join(typesFolder, 'index.d.ts')
  debug('loading %s', cypressTypesFilename)
  const cypressTypes = fs.readFileSync(cypressTypesFilename, 'utf8').trim()
  const lines = cypressTypes.split("\n")

  const isGlobalLine = (line) =>
    line.startsWith('/// ') &&
    (line.includes('cypress-global-vars.d.ts') ||
      line.includes('cypress-expect.d.ts'))

  let changedLines = 0
  const processed = lines.map((line) => {
    if (isGlobalLine(line)) {
      changedLines += 1
      line = '// ' + line
    }

    return line
  })

  if (changedLines) {
    const newCode = processed.join("\n") + "\n"
    fs.writeFileSync(cypressTypesFilename, newCode, 'utf8')
    debug('wrote %d changed line(s)', changedLines)
  } else {
    debug('nothing to change in %s', cypressTypesFilename)
  }
}

function noGlobalMocha() {
  const typesFolder = findCypressTypes()
  const mochaTypesFilename = path.join(typesFolder, 'mocha', 'index.d.ts')
  debug('loading %s', mochaTypesFilename)
  const mochaTypes = fs.readFileSync(mochaTypesFilename, 'utf8').trim()
  const lines = mochaTypes.split("\n")

  const isGlobalLine = (line) =>
    line.startsWith('declare var describe: ') ||
    line.startsWith('declare var xdescribe: ') ||
    line.startsWith('declare var before: ') ||
    line.startsWith('declare var beforeEach: ') ||
    line.startsWith('declare var after: ') ||
    line.startsWith('declare var afterEach: ') ||
    line.startsWith('declare var context: ') ||
    line.startsWith('declare var xcontext: ') ||
    line.startsWith('declare var it: ') ||
    line.startsWith('declare var test: ') ||
    line.startsWith('declare var xit: ')

  let changedLines = 0
  const processed = lines.map((line) => {
    if (isGlobalLine(line)) {
      changedLines += 1
      line = '// ' + line
    }

    return line
  })

  if (changedLines) {
    const newCode = processed.join("\n") + "\n"
    fs.writeFileSync(mochaTypesFilename, newCode, 'utf8')
    debug('wrote %d changed line(s)', changedLines)
  } else {
    debug('nothing to change in %s', mochaTypesFilename)
  }
}

noGlobalCy()
noGlobalMocha()
