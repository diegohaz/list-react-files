import { join } from 'path'
import listReactFiles from '../src'

test('listReactFiles', async () => {
  const paths = await listReactFiles(join(__dirname, 'fixture'))

  expect(paths).toEqual([
    'FoldedComponent/index.js',
    'FoldedComponent/InnerComponent/index.js',
    'FoldedComponentWithSameName/AnotherComponent.js',
    'FoldedComponentWithSameName/FoldedComponentWithSameName.js',
    'jsx-component.jsx',
    'PascalCasedComponent.js',
  ])
})
