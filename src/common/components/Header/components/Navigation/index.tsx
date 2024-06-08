import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface INavigation {
  id: string
  title: string
  link: string
}

interface INavigationData {
  data: INavigation[]
}

const Navigation: FC<INavigationData> = ({ data }) => {
  return (
    <nav>
      <ul className="flex justify-between">
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className="uppercase text-sm font-roboto font-semibold"
            >
              <NavLink
                className={({ isActive }) => {
                  return isActive ? 'text-gold' : 'text-dark'
                }}
                to={item.link}
              >
                {item.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
