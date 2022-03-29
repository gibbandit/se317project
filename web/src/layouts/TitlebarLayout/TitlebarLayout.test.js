import { render } from '@redwoodjs/testing/web'

import TitlebarLayout from './TitlebarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TitlebarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TitlebarLayout />)
    }).not.toThrow()
  })
})
