import { useAuth } from '@redwoodjs/auth'

const HomeHeaderLayout = ({ children }) => {
  const { logOut } = useAuth()
  return (
    <>
      <header className="flex py-6 px-8 bg-cyan-secondary rounded-b-lg drop-shadow">
        <div className="flex flex-row items-center">
          <div>
            <img className="h-10 pr-6" src="/favicon.png" alt="Logo" />
          </div>
        </div>
        <div className="fixed m-8 right-0 self-center">
          <button
            className=" m-2 border-2 border-magenta-secondary text-magenta-secondary text-2xl font-regular py-2 px-8 rounded-full"
            onClick={logOut}
          >
            sign out
          </button>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default HomeHeaderLayout
