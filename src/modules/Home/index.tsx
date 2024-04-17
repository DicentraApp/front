import ActionCarousel from './components/ActionCarousel'
import Bestsellers from './components/Bestsellers'
import TogetherWithCarousel from './components/TogetherWithCarousel'
import Intro from './components/Intro'
import QuickSelectionForm from './components/QuickSelectionForm'
import Slider from './components/Slider'
import {
  sliderData,
  introDataFirst,
  introDataSecond,
  introDataThird,
  selectionFormData,
} from './data'
import AboutFlowers from './components/AboutFlowers'
import ReviewsCarousel from './components/ReviewsCarousel'
import Blog from './components/Blog'

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
      <QuickSelectionForm data={selectionFormData} />
      <TogetherWithCarousel />
      <AboutFlowers
        title="Flowers are not just an occasion gift, they are another way to emphasize your uniqueness."
        data={introDataThird}
      />
      <ReviewsCarousel />
      <Blog title="Portal Dicentra" />
    </div>
  )
}

export default Home
