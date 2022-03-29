const TitlebarLayout = ({ children }) => {
  return (
    <>
      <header className="flex py-6 px-8 bg-cyan-secondary rounded-b-lg drop-shadow">
        <div className="flex flex-row items-center">
          <div>
            <img className="h-10 pr-6" src="/favicon.png" alt="Logo" />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default TitlebarLayout
