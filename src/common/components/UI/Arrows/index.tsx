import { FC } from 'react'

interface IArrow {
  offset?: boolean | undefined
  countSlide?: number | undefined
  dataLenght?: number | undefined
  handleClick: () => void
}

export const ArrowPrev: FC<IArrow> = ({ offset, handleClick }) => {
  return (
    <button
      className={`${!offset ? 'hidden' : 'block'} top-[225px] -left-2 w-12 h-12 bg-white border-2 border-gold border-solid rounded-full absolute z-10 flex items-center justify-center`}
      onClick={handleClick}
    >
      <img className="mr-1" src="images/slider/arrow-prev.svg" alt="prev" />
    </button>
  )
}

export const ArrowNext: FC<IArrow> = ({
  countSlide,
  handleClick,
  dataLenght,
}) => {
  return (
    <button
      className={`${countSlide === dataLenght ? 'hidden' : 'block'} top-[225px] -right-2 w-12 h-12 bg-white rounded-full border-2 border-gold border-solid absolute z-10 flex items-center justify-center`}
      onClick={handleClick}
    >
      <img className="ml-1" src="images/slider/arrow-next.svg" alt="next" />
    </button>
  )
}
