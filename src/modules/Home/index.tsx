import ActionCarousel from './components/ActionCarousel'
import Bestsellers from './components/Bestsellers'
import TogetherWithCarousel from './components/TogetherWithCarousel'
import Intro from './components/Intro'
import QuickSelectionForm from './components/QuickSelectionForm'
import Slider from './components/Slider'
import { sliderData, introDataFirst, introDataSecond } from './data'

const Home = () => {
  return (
    <div className="text-dark font-roboto text-base">
      <Slider data={sliderData} />
      <Intro
        description="We created Dicentra so that you no longer have to think about the best
        way to express your feelings."
        data={introDataFirst}
      />
      <Bestsellers />
      <Intro data={introDataSecond} />
      <ActionCarousel />
      <QuickSelectionForm />
      <TogetherWithCarousel />
    </div>
  )
}

export default Home
