// @flow
import glob from 'glob'

const globs = {
  camelCaseFile: '[A-Z]*.{js,ts}',
  camelCaseDir: '[A-Z]*/{index,[A-Z]*}.{js,ts}',
  jsxFile: '*.{jsx,tsx}',
}

/**
 * List react component files inside a directory
 */
const listReactFiles = (cwd: string): Promise<string[]> => {
  const patterns = Object.keys(globs).map(key => globs[key])
  const pattern = `**/{${patterns.join(',')}}`
  const ignore = [
    '**/node_modules/**',
    '**/{__tests__,test,tests}/**',
    '**/*.{test,spec}.*',
  ]

  return new Promise((resolve, reject) => {
    glob(pattern, { cwd, ignore }, (err, files) => {
      // istanbul ignore next
      if (err) {
        reject(err)
      }
      resolve(files)
    })
  })
}

export default listReactFiles
