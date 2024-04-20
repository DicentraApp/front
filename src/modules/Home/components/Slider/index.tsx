import { FC, useEffect, useState } from 'react'
import SliderItem from './components/SliderItem'
import { ISliderData } from '@/common/dto/getSliderDto'

interface ISlider {
  data: ISliderData
}

const Slider: FC<ISlider> = ({ data }) => {
  const [slider, setSlider] = useState(0)

  const handleNext = (index: number) => {
    if (index === data.length - 1) {
      setSlider(0)
    } else {
      setSlider(index + 1)
    }
  }

  const handlePrev = (index: number) => {
    if (index === 0) {
      setSlider(data.length - 1)
    } else {
      setSlider(index - 1)
    }
  }

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     if (slider === 0) {
  //       setSlider(data.length - 1)
  //     } else if (slider === data.length - 1) {
  //       setSlider(0)
  //     } else {
  //       setSlider(slider + 1)
  //     }
  //   }, 3500)

  //   return () => clearTimeout(timeout)
  // }, [slider])

  return (
    <div className="w-full mb-32 pt-32 h-screen overflow-hidden">
      {data?.map((slide, i) => (
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
