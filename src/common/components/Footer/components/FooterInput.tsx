import { Link } from 'react-router-dom'

const FooterInput = () => {
  return (
    <div className="w-64">
      <h5 className="font-bold text-xl mb-4">
        Stay up to date with the latest news
      </h5>
      <form className="relative">
        <input
          className="rounded-full p-4 pr-12 w-full text-dark font-roboto focus:ring-transparent focus:outline-none border-none"
          type="text"
          placeholder="Your email"
        />
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2"
          type="submit"
        >
          <img src="images/icons/navigation.svg" alt="send" />
        </button>
      </form>
      <div className="mt-7 flex">
        <Link
          className="border-gold border-2 border-solid rounded-full w-12 h-12 flex justify-center items-center mr-4"
          to="https://www.facebook.com"
          target="_blank"
        >
          <img src="/images/icons/facebook.svg" alt="facebook" />
        </Link>
        <Link
          className="border-gold border-2 border-solid rounded-full w-12 h-12 flex justify-center items-center"
          to="https://www.instagram.com"
          target="_blank"
        >
          <img src="/images/icons/instagram.svg" alt="instagram" />
        </Link>
      </div>
    </div>
  )
}

export default FooterInput
