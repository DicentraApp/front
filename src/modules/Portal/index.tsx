import { useGetBlogApiQuery } from '@/features/api/apiSlise'
import PortalItem from './components/PortalItem'
import PageWrapper from '@/common/components/PageWrapper'
import { CircularProgress } from '@mui/material'

const navArr = [{ nav: 'Portal Dicentra', link: '', isActive: true }]

const Portal = () => {
  const { data, isError, isLoading } = useGetBlogApiQuery()

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
    <PageWrapper title="Portal Dicentra" navArr={navArr}>
      <div className="flex flex-wrap">
        {data?.map((item) => <PortalItem key={item.id} item={item} />)}
      </div>
    </PageWrapper>
  )
}

export default Portal
