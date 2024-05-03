import { useAppSelector } from '@/hooks/hooks'
import EmptyReviews from './components/EmptyReviews'
import ReviewsList from './components/ReviewsList'

const Reviews = () => {
  const {
    flowerItem: { reviews },
  } = useAppSelector((state) => state.flowers)

  return (
    <div className="mt-6 bg-white py-24">
      <div className="container">
        {!reviews?.length ? <EmptyReviews /> : <ReviewsList />}
      </div>
    </div>
  )
}

export default Reviews
