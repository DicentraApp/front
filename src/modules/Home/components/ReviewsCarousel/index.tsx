import { useEffect, useState } from 'react'
import { ArrowNext, ArrowPrev } from '@/common/components/UI/Arrows'
import { Spinner } from 'flowbite-react'
import { useGetReviewsApiQuery } from '@/features/api/apiSlise'
import ReviewsCarouselItem from './ReviewsCarouselItem'

const ReviewsCarousel = () => {
  const { data, isLoading, isError } = useGetReviewsApiQuery()
  const [countSlides, setCountSlides] = useState(2)
  const [offset, setOffset] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [trackWidth, setTrackWidth] = useState(0)
  console.log(itemWidth)

  const handlePrevClick = () => {
    if (!offset) return
    setOffset((prev) => prev + itemWidth)
    setCountSlides((prev) => prev - 1)
  }

  const handleNextClick = () => {
    setOffset((prev) => prev - itemWidth)
    setCountSlides((prev) => prev + 1)
    if (countSlides === data!.length) return
  }

  useEffect(() => {
    if (data) {
      setTrackWidth(itemWidth * data.length)
    }
  }, [data, itemWidth])

  if (isLoading) {
    return (
      <div className="text-center">
        {' '}
        <Spinner color="info" size="md" />
      </div>
    )
  }

  if (isError) {
    return (
      <p className="text-center text-red text-md">
        Something went wrong, please try again!
      </p>
    )
  }

  return (
    <section className="bg-light py-24">
      <div className="container relative">
        <h1 className="text-4xl mb-8 text-center font-medium">
          Customer Reviews
        </h1>

        <div className="overflow-hidden">
          <div
            className="flex justify-between transition-transform"
            style={{
              width: `${trackWidth}px`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {data?.map((item) => (
              <ReviewsCarouselItem
                key={item.id}
                data={item}
                setItemWidth={setItemWidth}
              />
            ))}
          </div>
        </div>

        <ArrowPrev
          offset={!!offset}
          handleClick={handlePrevClick}
          cssStyles="-bottom-6 right-20 bg-dark border-dark"
          fillColor="#fff"
        />
        <ArrowNext
          dataLenght={data?.length}
          countSlides={countSlides}
          handleClick={handleNextClick}
          cssStyles="-bottom-6 right-7 bg-dark border-dark"
          fillColor="#fff"
        />
      </div>
    </section>
  )
}

export default ReviewsCarousel
