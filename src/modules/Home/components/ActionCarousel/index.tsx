import { useState } from 'react'
import { Spinner } from 'flowbite-react'
import { useAppSelector } from '@/common/hooks/hooks'
import { useSelector } from 'react-redux'
import { selectedActionFlowers } from '@/features/flowers/flowersSelector'
import FlowersItem from '@/common/components/FlowersItem'
import { ArrowNext, ArrowPrev } from '@/common/components/UI/Arrows'

const ActionCarousel = () => {
  const actionFlowersData = useSelector(selectedActionFlowers)
  const { isLoading } = useAppSelector((state) => state.flowers)
  const [offset, setOffset] = useState(0)
  const [countSlide, setCountSlide] = useState(5)
  const [itemWidth, setItemWidth] = useState(0)
  const trackWidth = Math.ceil(itemWidth * actionFlowersData.length)

  const handlePrevClick = () => {
    if (!offset) return
    setOffset((prev) => prev + itemWidth)
    setCountSlide((prev) => prev - 1)
  }

  const handleNextClick = () => {
    if (countSlide === actionFlowersData.length) return
    setOffset((prev) => prev - itemWidth)
    setCountSlide((prev) => prev + 1)
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
    <section className="bg-light py-16 mb-26">
      <div className="container relative">
        <h2 className="text-4xl mb-8 text-center font-medium">
          Promotional offers
        </h2>

        <div className="w-full overflow-x-hidden">
          <div
            className={`flex w-[${trackWidth}px] transition-transform`}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {actionFlowersData?.map((elem) => {
              return (
                <FlowersItem
                  key={elem.id}
                  data={elem}
                  setItemWidth={setItemWidth}
                />
              )
            })}
          </div>
        </div>

        <ArrowPrev offset={!!offset} handleClick={handlePrevClick} />
        <ArrowNext
          countSlide={countSlide}
          dataLenght={actionFlowersData.length}
          handleClick={handleNextClick}
        />
      </div>
    </section>
  )
}

export default ActionCarousel
