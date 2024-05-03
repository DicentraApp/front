import { FC } from 'react'

import '../slider.css'

interface ISliderItem {
  bg: string
  img: string
  activeClass: boolean
  next: () => void
  prev: () => void
}

const SliderItem: FC<ISliderItem> = ({ bg, img, activeClass, next, prev }) => {
  return (
    <div
      className={`${activeClass ? 'active-slider' : 'hidden'} transition-all relative h-full w-full`}
    >
      <div
        className={`${activeClass ? 'active-content' : 'translate-y-full'} ${bg} w-2/6 flex items-center justify-center transition-all`}
      >
        <div className="w-80 text-light">
          <h2 className="font-black text-3xl mb-5 font-ubuntu">
            Only the best bouquets!
          </h2>
          <p className="text-base font-light mb-12">24/7 delivery</p>
          <button className="py-4 px-9 bg-gold rounded-26 font-normal">
            Choose a bouquet
          </button>
        </div>
      </div>
      <img
        className={`${activeClass ? 'active-img' : '-translate-y-full'} ${bg} transition-all w-4/6 object-cover`}
        src={`images/slider/${img}.jpg`}
      />

      <div className="absolute bottom-20 left-1/4 pl-12 flex z-30">
        <button
          className="w-16 h-16 border border-gold rounded-full bg-white flex items-center justify-center mr-5"
          onClick={prev}
        >
          <img className="mr-1" src="images/icons/arrow-prev.svg" alt="prev" />
        </button>
        <button
          className="w-16 h-16 border border-gold rounded-full bg-white flex items-center justify-center"
          onClick={next}
        >
          <img className="ml-1" src="images/icons/arrow-next.svg" alt="next" />
        </button>
      </div>
    </div>
  )
}

export default SliderItem
