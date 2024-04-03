import { useEffect, useState } from 'react'
import SliderItem from './SliderItem'

const sliderData = [
  {
    bg: 'bg-dark',
    img: 'slider-1',
  },
  {
    bg: 'bg-green',
    img: 'slider-2',
  },
  {
    bg: 'bg-bordo',
    img: 'slider-3',
  },
]

const Slider = () => {
  const [slider, setSlider] = useState(0)

  const handleNext = (index: number) => {
    if (index === sliderData.length - 1) {
      setSlider(0)
    } else {
      setSlider(index + 1)
    }
  }

  const handlePrev = (index: number) => {
    if (index === 0) {
      setSlider(sliderData.length - 1)
    } else {
      setSlider(index - 1)
    }
  }

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (slider === 0) {
  //       setSlider(sliderData.length - 1)
  //     } else if (slider === sliderData.length - 1) {
  //       setSlider(0)
  //     } else {
  //       setSlider(slider + 1)
  //     }
  //   }, 3500)

  //   return () => clearTimeout(timeout)
  // }, [slider])

  return (
    <div className="w-full mb-20 pt-32 h-screen">
      {sliderData.map((slide, i) => (
        <SliderItem
          key={slide.img}
          bg={slide.bg}
          img={slide.img}
          activeClass={slider === i}
          next={() => handleNext(i)}
          prev={() => handlePrev(i)}
        />
      ))}
    </div>
  )
}

export default Slider
