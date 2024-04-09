import { FC } from 'react'

interface ILogo {
  imageLogoPath: string
  subtitleLogo: string
}

const Logo: FC<ILogo> = ({ imageLogoPath, subtitleLogo }) => {
  return (
    <div className="relative h-14 w-52">
      <img src={imageLogoPath} alt="Logo" />
      <span className="absolute right-1.5 bottom-2 uppercase text-xs tracking-widest font-ubuntu font-light text-dark">
        {subtitleLogo}
      </span>
    </div>
  )
}

export default Logo
