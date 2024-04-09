import Bestsellers from './components/Bestsellers'
import Intro from './components/Intro'
import Slider from './components/Slider'

const Home = () => {
  return (
    <div className="text-dark font-roboto text-base">
      <Slider />
      <Intro />
      <Bestsellers />
    </div>
  )
}

export default Home
