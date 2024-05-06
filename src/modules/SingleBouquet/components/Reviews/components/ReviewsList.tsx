import { useEffect } from 'react'
import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { getFlowers } from '@/features/flowers/flowersSlice'
import { setReviewsModal } from '@/features/modal/modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import TotalRating from './TotalRating'
import ReviewsItem from './ReviewsItem'

const ReviewsList = () => {
  const dispatch = useAppDispatch()
  const {
    flowerItem: { reviews },
  } = useAppSelector((state) => state.flowers)

  useEffect(() => {
    dispatch(getFlowers())
  }, [dispatch])

  return (
    <div className="font-roboto relative -mt-4 mx-auto border border-gold py-12 px-24">
      <div className="flex items-center justify-between mb-4 mr-2">
        <h2 className="font-medium text-3xl">Reviews</h2>
        <GoldBtn
          text="Write a review"
          styles="w-52"
          handleClick={() => dispatch(setReviewsModal(true))}
        />
      </div>

      <TotalRating />

      <div className="mt-6">
        {reviews?.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </div>

      <div>
        <img
          className="absolute bottom-0 left-0"
          src="/images/fones/leaves.png"
          alt="rating"
        />
        <img
          className="absolute bottom-0 right-0"
          src="/images/fones/tulips.png"
          alt="rating"
        />
      </div>
    </div>
  )
}

export default ReviewsList
