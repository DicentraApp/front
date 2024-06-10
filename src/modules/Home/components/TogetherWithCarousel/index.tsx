import { useState } from 'react'
import { ArrowNext, ArrowPrev } from '@/common/UI/Arrows'
import TogetherWithItem from './components/TogetherWithItem'
import { useAppSelector } from '@/hooks/hooks'
import { selectedTogetherWithFlowers } from '@/features/flowers/flowersSelector'

const TogetherWithCarousel = () => {
  const data = useAppSelector(selectedTogetherWithFlowers)
  const [countSlides, setCountSlides] = useState(2)
  const [offset, setOffset] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const trackWidth = data?.length ? itemWidth * data?.length : 0

  const handlePrevClick = () => {
    if (!offset) return
    setOffset((prev) => prev + itemWidth)
    setCountSlides((prev) => prev - 1)
  }

  const handleNextClick = () => {
    setOffset((prev) => prev - itemWidth)
    setCountSlides((prev) => prev + 1)
    if (countSlides === data?.length) return
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
            {data?.map((item) => (
              <TogetherWithItem
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
          cssStyles="top-[225px] -left-2 bg-white border-gold"
        />
        <ArrowNext
          dataLenght={data?.length}
          countSlides={countSlides}
          handleClick={handleNextClick}
          cssStyles="top-[225px] -right-2 bg-white border-gold"
        />
      </div>
    </section>
  )
}

export default TogetherWithCarousel
