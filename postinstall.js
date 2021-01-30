// this script patches "cypress" types file to remove global variables
//
const path = require('path')
const fs = require('fs')
const os = require('os')
const debug = require('debug')('local-cypress')

const cypressAt = require.resolve('cypress')
debug('Cypress found at %s', cypressAt)
const cypressFolder = path.dirname(cypressAt)
const cypressTypesFilename = path.join(cypressFolder, 'types', 'index.d.ts')
debug('loading %s', cypressTypesFilename)
const cypressTypes = fs.readFileSync(cypressTypesFilename, 'utf8').trim()
const lines = cypressTypes.split(os.EOL)

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
  const newCode = processed.join(os.EOL) + os.EOL
  fs.writeFileSync(cypressTypesFilename, newCode, 'utf8')
  debug('wrote %d changed line(s)', changedLines)
} else {
  debug('nothing to change in %s', cypressTypesFilename)
}
