import { useGetBlogApiQuery } from '@/features/api/apiSlise'
import { FC } from 'react'
import BlogItem from './components/BlogItem'
import { useNavigate } from 'react-router-dom'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { CircularProgress } from '@mui/material'

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
        <CircularProgress color="secondary" />
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
          <DarktBtn
            text="See all portal"
            width="w-36"
            handleClick={() => navigate('portal')}
          />
        </div>
      </div>
    </section>
  )
}

export default Blog
