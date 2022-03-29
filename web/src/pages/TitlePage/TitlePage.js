import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
const TitlePage = () => {
  return (
    <>
      <MetaTags title="Title" description="Title page" />

      <div className="fixed bottom-8 left-8 flex-wrap">
        <div className="px-12 py-8 w-fit h-fit bg-cyan-secondary flex flex-col place-items-center rounded-lg drop-shadow">
          <div className="text-4xl font-semibold">
            <p>one place for all your photos</p>
          </div>
          <div className="h-16" />
          <div>
            <button
              className="bg-yellow-secondary text-2xl font-regular py-2 px-8 rounded-full"
              onClick={() => navigate(routes.signup())}
            >
              sign up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TitlePage
