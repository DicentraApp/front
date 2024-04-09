import { IFlowerItem } from '@/common/dto/getFlowersDto'
import { useAppSelector } from '@/common/hooks/hooks'
import { Spinner } from 'flowbite-react'
import { FC } from 'react'

const BestsellersItem: FC<IFlowerItem> = ({ img, name, price }) => {
  const { isLoading } = useAppSelector((state) => state.flowers)

  return (
    <div className="w-[244px] cursor-pointer">
      <div className="w-full h-[330px] bg-white flex items-center justify-center shadow-lg mb-4 ">
        {isLoading && (
          <div className="text-center">
            {' '}
            <Spinner color="info" size="md" />
          </div>
        )}
        <img
          className="w-48 h-52 object-contain animate-fade"
          src={`images/flowers/${img}.png`}
          alt={name}
        />
      </div>
      <h4 className="font-normal text-center mb-3">{name}</h4>
      <div className="text-center mb-4">
        {' '}
        <span className="font-semibold text-xl">{price}</span>$
      </div>

      <div className="flex flex-col items-center">
        <button className="mb-2 bg-dark hover:bg-btnPressedDark transition-all py-3 px-7 text-white rounded-3xl">
          Add to cart
        </button>
        <a
          href=""
          className="text-gold hover:text-btnPressedGold transition-all"
        >
          Quick order
        </a>
      </div>
    </div>
  )
}

export default BestsellersItem
