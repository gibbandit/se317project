import { render } from '@redwoodjs/testing/web'

import HomeHeaderLayout from './HomeHeaderLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomeHeaderLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeHeaderLayout />)
    }).not.toThrow()
  })
})
