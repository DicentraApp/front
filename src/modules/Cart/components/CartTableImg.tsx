import { IFlowerItem, ITogetherWith } from '@/common/dto/getFlowersDto'
import { FC } from 'react'
import CartTableImgItem from './CartTableImgItem'
import { Link } from 'react-router-dom'

interface CartTableImgProps {
  item: IFlowerItem | ITogetherWith
}

const CartTableImg: FC<CartTableImgProps> = ({ item }) => {
  const isBouquet = item.name.toLowerCase().includes('bouquet')

  return (
    <>
      {!item?.togetherWith ? (
        isBouquet ? (
          <Link to={`/bouquets/${item.id}`}>
            <CartTableImgItem
              name={item.name}
              article={item.article}
              img={item.img}
            />
          </Link>
        ) : (
          <CartTableImgItem
            name={item.name}
            article={item.article}
            img={item.img}
          />
        )
      ) : (
        <div className="flex items-center">
          <Link to={`/bouquets/${item.id}`}>
            <CartTableImgItem
              name={item.name}
              article={item.article}
              img={item.img}
            />
          </Link>

          <div className="mx-8 text-2xl">+</div>
          <CartTableImgItem
            name={item.togetherWith.name}
            article={item.togetherWith.article}
            img={item.togetherWith.img}
          />
        </div>
      )}
    </>
  )
}

export default CartTableImg
