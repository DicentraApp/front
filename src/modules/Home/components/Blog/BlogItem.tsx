import { IBlogItem } from '@/common/dto/getBlogDto'
import { FC } from 'react'

interface IBlogItemProps {
  data: IBlogItem
}

const BlogItem: FC<IBlogItemProps> = ({ data }) => {
  return (
    <div className="w-1/3">
      <img
        className="w-full h-42 mb-7"
        src={`images/blog/${data.imgPath}`}
        alt={data.title}
      />
      <h3 className="text-center text-xl font-semibold mb-3">{data.title}</h3>
      <p className="text-center px-3">{data.text}</p>
    </div>
  )
}

export default BlogItem
