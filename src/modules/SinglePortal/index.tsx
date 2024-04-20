import { useAppSelector } from '@/hooks/hooks'
import { NavLink } from 'react-router-dom'

const SinglePortal = () => {
  const { article } = useAppSelector((state) => state.portal)

  if (!article) return

  return (
    <section className="bg-light pt-44 pb-40">
      <div className="container">
        <ul className="flex justify-center mb-8 text-sm font-thin text-dark">
          <li className="pr-1 after:content-['/'] after:pl-1">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="pr-1 after:content-['/'] after:pl-1">
            <NavLink to="/portal"> Portal Dicentra</NavLink>
          </li>
          <li className="pr-1">
            <NavLink
              to={`/portal/${article.id}`}
              className={({ isActive }) =>
                isActive ? 'text-gold' : 'text-dark'
              }
            >
              {article.title}
            </NavLink>
          </li>
        </ul>

        <h1 className="text-center text-4xl font-medium mb-7">
          {article.title}
        </h1>

        <div className="border border-gold border-solid p-10 w-full h-full w-[986px] mx-auto">
          <img
            className="w-full h-[412px] bg-gray-200 object-cover mb-12"
            src={`/images/blog/${article.imgPath}`}
            alt={article.title}
          />
          <div className="w-9/12 mx-auto">
            <span className="text-sm font-light text-gray">{article.date}</span>
            <div className="text-xl mb-8 font-ubuntu mt-2">
              {article.describing}
            </div>

            {article.text.map((t, i) => {
              return (
                <div className="mb-9 last:mb-0" key={t.subtitle + i}>
                  <h5 className="text-2xl font-medium mb-4">{t.subtitle}</h5>
                  <p className="text-md font-ubuntu font-light">
                    {t.paragraph}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SinglePortal
