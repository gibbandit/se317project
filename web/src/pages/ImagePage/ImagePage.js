import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import ImageCell from 'src/components/ImageCell'

const ImagePage = ({ imageID }) => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Image" description="Image page" />

      {imageID ? (
        <ImageCell imageID={imageID} userID={currentUser.id} />
      ) : (
        <p>not an image</p>
      )}
    </>
  )
}

export default ImagePage
