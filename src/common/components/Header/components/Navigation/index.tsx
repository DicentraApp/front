import { FC } from 'react'
import { Link } from 'react-router-dom'

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
    <nav className="container">
      <ul className="flex justify-between">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className="uppercase text-sm font-roboto font-semibold text-dark"
                to={item.link}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
