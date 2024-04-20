import { FC } from 'react'
import { NavLink } from 'react-router-dom'

export interface NavItemProps {
  nav: string
  link: string
  isActive?: boolean
}

interface PageWrapperProps {
  children: JSX.Element
  title: string
  navArr: NavItemProps[]
}

const PageWrapper: FC<PageWrapperProps> = ({ children, title, navArr }) => {
  return (
    <section className="bg-light pt-48 pb-40">
      <div className="container">
        <ul className="flex justify-center mb-8 text-sm font-thin text-dark">
          <li className="pr-1 after:content-['/'] after:pl-1">
            <NavLink to="/">Home</NavLink>
          </li>

          {navArr.map((n) => (
            <li
              key={n.link}
              className={`pr-1 after:pl-1 ${n?.isActive ? '' : "after:content-['/']"}`}
            >
              <NavLink
                to={n.link}
                className={n.isActive ? 'font-medium' : 'font-thin'}
              >
                {n.nav}
              </NavLink>
            </li>
          ))}
        </ul>

        <h1 className="text-center text-4xl font-medium mb-9">{title}</h1>

        <div className="border border-gold border-solid p-10">{children}</div>
      </div>
    </section>
  )
}

export default PageWrapper
