import { useGetBlogApiQuery } from '@/features/api/apiSlise'
import { FC } from 'react'
import BlogItem from './components/BlogItem'
import { Spinner } from 'flowbite-react'
import AddCartBtn from '@/common/components/UI/Buttons/CartBtn'
import { useNavigate } from 'react-router-dom'

interface IBlogProps {
  title: string
}

const Blog: FC<IBlogProps> = ({ title }) => {
  const { data, isError, isLoading } = useGetBlogApiQuery()
  const navigate = useNavigate()

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
    <section className="mt-28 mb-40">
      <div className="container">
        <h1 className="text-4xl mb-10 text-center font-medium">{title}</h1>

        <div className="flex mb-16">
          {data
            ?.slice(0, 3)
            .map((item) => <BlogItem key={item.id} data={item} />)}
        </div>

        <div className="text-center">
          <AddCartBtn
            text="See all portal"
            handleClick={() => navigate('portal')}
          />
        </div>
      </div>
    </section>
  )
}

export default Blog
