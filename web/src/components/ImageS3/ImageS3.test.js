import { render } from '@redwoodjs/testing/web'

import ImageS3 from './ImageS3'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ImageS3', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageS3 />)
    }).not.toThrow()
  })
})
