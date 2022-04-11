import { render } from '@redwoodjs/testing/web'

import UploadImage from './UploadImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UploadImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadImage />)
    }).not.toThrow()
  })
})
