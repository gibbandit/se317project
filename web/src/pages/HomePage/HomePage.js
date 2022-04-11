import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import ImagesCell from 'src/components/ImagesCell'
import UploadImage from 'src/components/UploadImage/UploadImage'

const HomePage = () => {
  const { currentUser, isAuthenticated, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Home!" description="Home page" />
      <UploadImage />
      {isAuthenticated && <ImagesCell userID={currentUser.id} />}
    </>
  )
}

export default HomePage
