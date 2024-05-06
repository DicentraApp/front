import { IIntroData } from '@/common/dto/getIntroDto'
import IntroItem from './components/IntroItem'
import { FC } from 'react'

interface IIntro {
  data: IIntroData
  description?: string
}

const Intro: FC<IIntro> = ({ data, description }) => {
  return (
    <section className="relative">
      <div className="container">
        <p className="font-medium text-xl w-5/12 mb-32">{description}</p>

        <div className="flex justify-between mb-48 flex-wrap">
          {data?.map((item) => <IntroItem key={item.id} {...item} />)}
        </div>

        <div className="absolute -top-20 right-0">
          <img src="images/intro/intro-fone.png" alt="intro" />
        </div>
      </div>
    </section>
  )
}

export default Intro
