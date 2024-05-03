import { FC } from 'react'
import { useAppSelector } from '@/hooks/hooks'
import { CircularProgress } from '@mui/material'

interface MainImgProps {
  imgMainPath: string
}

const MainImg: FC<MainImgProps> = ({ imgMainPath }) => {
  const { flowerItem } = useAppSelector((state) => state.flowers)

  let actionPercent

  if (flowerItem.actionPrice) {
    const diff = Math.round((flowerItem.actionPrice / flowerItem.price) * 100)
    actionPercent = 100 - diff
  }

  return (
    <div className="w-5/12 flex justify-center items-center relative mr-10 transition-all">
      {!imgMainPath ? (
        <div className="text-center">
          {' '}
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <img
          className="w-full h-[466px] object-contain"
          src={`/images/flowers/${imgMainPath}`}
          alt={flowerItem.name}
        />
      )}

      {flowerItem.actionPrice && (
        <div className="top-0 left-4 w-12 h-12 bg-white rounded-full border-2 border-gold border-solid text-gold text-sm absolute z-10 font-semibold flex items-center justify-center">
          -{actionPercent}%
        </div>
      )}
    </div>
  )
}

export default MainImg
