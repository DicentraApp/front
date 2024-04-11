import { useState } from 'react'
import { Spinner } from 'flowbite-react'
import { useAppSelector } from '@/common/hooks/hooks'
import { useSelector } from 'react-redux'
import { selectedActionFlowers } from '@/features/flowers/flowersSelector'
import FlowersItem from '@/common/components/FlowersItem'

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

        <button
          className={`${!offset ? 'hidden' : 'block'} top-1/2 -translate-y-full -left-2 w-12 h-12 bg-white text-3xl border-2 border-gold border-solid text-dark rounded-full absolute z-10 font-semibold flex items-center justify-center`}
          onClick={handlePrevClick}
        >
          &lsaquo;
        </button>
        <button
          className={`${countSlide === actionFlowersData.length ? 'hidden' : 'block'} top-1/2 -translate-y-full -right-2 w-12 h-12 bg-white rounded-full border-2 border-gold border-solid text-dark text-3xl absolute z-10 font-semibold flex items-center justify-center`}
          onClick={handleNextClick}
        >
          &rsaquo;
        </button>
      </div>
    </section>
  )
}

export default ActionCarousel
