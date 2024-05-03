import RateIcon from '@/common/UI/Buttons/RateIcon'
import { useAppSelector } from '@/hooks/hooks'

const TotalRating = () => {
  const {
    flowerItem: { reviews },
  } = useAppSelector((state) => state.flowers)
  const allRating = reviews!.reduce((prev, item) => prev + item.rating, 0)
  const GPA = allRating! / reviews!.length

  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center">
        <RateIcon styles={{ fill: '#f873af' }} />
        <div className="text-xl font-medium ml-1 mr-4">
          {GPA < 5 ? GPA.toFixed(1) : GPA} / 5
        </div>
        <span className="text-gold">
          {reviews?.length} {reviews?.length == 1 ? 'review' : 'reviews'}
        </span>
      </div>
    </div>
  )
}

export default TotalRating
