import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="bg-light h-screen flex justify-center items-center flex-col">
      <div className="container">
        <div className="relative flex justify-between items-center border border-gold border-solid px-40 py-32 mx-auto mb-10">
          <p className="text-4xl">
            Whoopss...
            <div>Page not found! </div>
          </p>
          <div className="text-gold font-medium text-[144px]">404</div>

          <div className="absolute -top-4 -right-10">
            <img src="images/intro/intro-fone.png" alt="intro" />
          </div>
        </div>
      </div>
      <Link
        className="rounded-full bg-dark py-6 px-20 text-2xl text-center text-light hover:bg-btnPressedDark transition-all"
        to="/"
      >
        To home
      </Link>
    </section>
  )
}

export default PageNotFound
