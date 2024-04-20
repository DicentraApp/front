import { NavLink } from 'react-router-dom'
import { useGetBlogApiQuery } from '@/features/api/apiSlise'
import PortalItem from './components/PortalItem'
import { Spinner } from 'flowbite-react'

const Portal = () => {
  const { data, isError, isLoading } = useGetBlogApiQuery()

  if (isLoading) {
    return (
      <div className="text-center py-28">
        {' '}
        <Spinner color="info" size="md" />
      </div>
    )
  }

  if (isError) {
    return (
      <p className="text-center text-red-600 text-md py-28">
        Something went wrong, please try again!
      </p>
    )
  }

  return (
    <section className="bg-light pt-44 pb-40">
      <div className="container">
        <ul className="flex justify-center mb-8 text-sm font-thin text-dark">
          <li className="pr-1 after:content-['/'] after:pl-1">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="pr-1">
            <NavLink
              to="/portal"
              className={({ isActive }) =>
                isActive ? 'text-gold' : 'text-dark'
              }
            >
              {' '}
              Portal Dicentra
            </NavLink>
          </li>
        </ul>

        <h1 className="text-center text-4xl font-medium mb-7">
          Portal Dicentra
        </h1>

        <div className="border border-gold border-solid p-10 w-full h-full w-[986px] mx-auto">
          <div className="flex flex-wrap">
            {data?.map((item) => <PortalItem key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portal
