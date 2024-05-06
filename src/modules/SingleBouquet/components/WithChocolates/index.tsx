import { FC } from 'react'
import { IFlowerItem } from '@/common/dto/getFlowersDto'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'

interface ITogetherWithItem {
  data: IFlowerItem
}

const WithChocolates: FC<ITogetherWithItem> = ({ data }) => {
  const { img, name, togetherWith, price } = data
  const priceWithout = price + togetherWith!.price
  const priceWith = price + togetherWith!.actionPrice
  const saving = priceWithout - priceWith

  return (
    <div className="my-24 bg-white text-dark p-10">
      <div className="flex justify-between items-center border border-solid border-light p-10">
        <h2 className="w-1/12 font-medium text-xl mr-10">Cheaper together</h2>

        <div className="flex items-center">
          <div className="flex items-center justify-center mr-4">
            <img
              className="w-[133px] h-[148px] object-contain"
              src={`/images/products/${img}`}
              alt={name}
            />
          </div>
          <div>
            <h3 className="font-normal text-center w-36">{name}</h3>
            <div className="text-center mt-4">
              <span className="font-semibold text-xl">{price}</span> $
            </div>
          </div>
        </div>

        <span className="text-3xl text-grey font-light flex items-center  mx-10">
          +
        </span>

        <div className="flex items-center">
          <div className="flex items-center justify-center mr-4">
            <img
              className="w-[120px] h-[116px] object-contain"
              src={`/images/products/${togetherWith?.img}`}
              alt={name}
            />
          </div>
          <div>
            <h3 className="font-normal text-center w-36">
              Chocolates {togetherWith?.name}
            </h3>
            <div className="text-center mt-4">
              <span
                className={`${!togetherWith?.actionPrice ? 'text-dark' : 'mr-2 text-gold line-through'} font-semibold text-xl `}
              >
                {togetherWith?.price}
              </span>
              <span className="font-semibold text-xl ">
                {!togetherWith?.actionPrice ? null : togetherWith.actionPrice}
              </span>{' '}
              $
            </div>
          </div>
        </div>

        <span className="text-3xl text-grey font-light flex items-center mx-10">
          =
        </span>

        <div className="text-center">
          <div className="font-semibold text-xl mb-4">
            <div className="text-sale text-sm mb-1">Saving {saving} $</div>
            <span className="mr-3 text-gold line-through">{priceWithout}</span>
            <span className="text-dark ">{priceWith}</span> $
          </div>
          <DarktBtn text="Add to cart" width="w-32" handleClick={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default WithChocolates
