import GoldBtn from '@/common/UI/Buttons/GoldBtn'
import { setReviewsModal } from '@/features/reviews/reviewsSlice'
import { useAppDispatch } from '@/hooks/hooks'

const EmptyReviews = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="border border-solid border-gold py-12 px-14 flex justify-between items-center">
      <p className="text-dark text-xl">
        There are currently no product reviews yet
      </p>
      <GoldBtn
        text="Write a review"
        styles="w-56"
        handleClick={() => dispatch(setReviewsModal(true))}
      />
    </div>
  )
}

export default EmptyReviews
