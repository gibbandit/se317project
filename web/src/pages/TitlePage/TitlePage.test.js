import { render } from '@redwoodjs/testing/web'

import TitlePage from './TitlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TitlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TitlePage />)
    }).not.toThrow()
  })
})
