import { FC, useState } from 'react'
import { ArrowNext, ArrowPrev } from '@/common/components/UI/Arrows'
import CheaperTogetherCarouselItem from './TogetherWithCarouselItem'
import { useAppSelector } from '@/hooks/hooks'
import { Spinner } from 'flowbite-react'
import { IFlowerItem } from '@/common/dto/getFlowersDto'

interface ICarouselProps {
  children: JSX.Element[]
  data: IFlowerItem[]
}

const CarouselWithTwoSlides: FC<ICarouselProps> = ({ children, data }) => {
  const { isLoading } = useAppSelector((state) => state.flowers)
  const [countSlides, setCountSlides] = useState(2)
  const [offset, setOffset] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const trackWidth = itemWidth * data.length

  const handlePrevClick = () => {
    if (!offset) return
    setOffset((prev) => prev + itemWidth)
    setCountSlides((prev) => prev - 1)
  }

  const handleNextClick = () => {
    setOffset((prev) => prev - itemWidth)
    setCountSlides((prev) => prev + 1)
    if (countSlides === data.length) return
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
            {data.map((item) => (
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
          dataLenght={data.length}
          countSlides={countSlides}
          handleClick={handleNextClick}
        />
      </div>
    </section>
  )
}

export default CarouselWithTwoSlides
