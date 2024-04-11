import { IIntroData } from '@/common/dto/getIntroDto'
import IntroItem from './IntroItem'
import { FC } from 'react'

interface IIntro {
  data: IIntroData
  description?: string
}

const Intro: FC<IIntro> = ({ data, description }) => {
  return (
    <section className="container relative">
      <p className="font-medium text-xl w-5/12 mb-32">{description}</p>

      <div className="flex justify-between mb-48">
        {data?.map((item) => <IntroItem key={item.id} {...item} />)}
      </div>

      <div className="absolute -top-20 right-0">
        <img src="images/intro/intro-fone.png" alt="intro" />
      </div>
    </section>
  )
}

export default Intro
