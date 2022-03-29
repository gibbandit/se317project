import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { currentUser, isAuthenticated } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {isAuthenticated && <div>signed in as {currentUser.username}</div>}
    </>
  )
}

export default HomePage
