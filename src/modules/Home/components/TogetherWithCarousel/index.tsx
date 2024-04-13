import { useState } from 'react'
import { ArrowNext, ArrowPrev } from '@/common/components/UI/Arrows'
import CheaperTogetherCarouselItem from './TogetherWithCarouselItem'
import { useAppSelector } from '@/common/hooks/hooks'
import { selectedTogetherWithFlowers } from '@/features/flowers/flowersSelector'
import { Spinner } from 'flowbite-react'

const TogetherWithCarousel = () => {
  const togetherWith = useAppSelector(selectedTogetherWithFlowers)
  const { isLoading } = useAppSelector((state) => state.flowers)
  const [countSlide, setCountSlide] = useState(2)
  const [offset, setOffset] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const trackWidth = itemWidth * togetherWith.length

  const handlePrevClick = () => {
    if (!offset) return
    setOffset((prev) => prev + itemWidth)
    setCountSlide((prev) => prev - 1)
  }

  const handleNextClick = () => {
    setOffset((prev) => prev - itemWidth)
    setCountSlide((prev) => prev + 1)
    if (countSlide === togetherWith.length) return
  }

  if (isLoading) {
    return (
      <div className="text-center">
        {' '}
        <Spinner color="info" size="md" />
      </div>
    )
  }

  return (
    <section className="bg-light py-24">
      <div className="container relative">
        <h1 className="text-4xl mb-8 text-center font-medium">
          Cheaper together
        </h1>

        <div className="overflow-x-hidden">
          <div
            className="flex justify-between transition-transform"
            style={{
              width: `${trackWidth}px`,
              transform: `translateX(${offset}px)`,
            }}
          >
            {togetherWith.map((item) => (
              <CheaperTogetherCarouselItem
                key={item.id}
                data={item}
                setItemWidth={setItemWidth}
              />
            ))}
          </div>
        </div>

        <ArrowPrev offset={!!offset} handleClick={handlePrevClick} />
        <ArrowNext
          dataLenght={togetherWith.length}
          countSlide={countSlide}
          handleClick={handleNextClick}
        />
      </div>
    </section>
  )
}

export default TogetherWithCarousel
