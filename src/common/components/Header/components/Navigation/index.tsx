import { FC } from 'react'

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
              <a
                className="uppercase text-sm font-roboto font-semibold text-dark"
                href={item.link}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
