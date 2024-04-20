import { IIntroItem } from '@/common/dto/getIntroDto'
import { FC } from 'react'

const IntroItem: FC<IIntroItem> = ({ imgPath, title, text, marginToTop }) => {
  return (
    <div className={`w-5/12 text-base ${marginToTop}`}>
      <img
        src={`images/intro/${imgPath}`}
        alt="intro"
        className="w-[420px] h-56 bg-gray-200"
      />
      <h4 className="text-xl my-5 font-semibold">{title}</h4>
      <p className="w-8/12">{text}</p>
    </div>
  )
}

export default IntroItem
