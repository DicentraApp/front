import { useState } from 'react'
import {
  addPriceWithCount,
  minusPriceWithCount,
} from '@/features/flowers/flowersSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { addToCart } from '@/features/cart/cartSlice'

const Count = () => {
  const { flowerItem } = useAppSelector((state) => state.flowers)
  const [count, setCount] = useState(1)
  const dispatch = useAppDispatch()

  const handleCountToDown = () => {
    if (count === 1) return
    setCount((prev) => prev - 1)
    dispatch(minusPriceWithCount())
  }

  const handleCountToUp = () => {
    setCount((prev) => prev + 1)
    dispatch(addPriceWithCount())
  }

  return (
    <div className="flex mt-5">
      <div className="w-1/3 border border-gold border-solid rounded-full py-3 px-5 flex justify-between text-2xl mr-3">
        <button className="text-gold font-semibold" onClick={handleCountToDown}>
          &minus;
        </button>
        <span>{count}</span>
        <button className="text-gold font-semibold" onClick={handleCountToUp}>
          +
        </button>
      </div>
      <DarktBtn
        text="Add to cart"
        width="w-2/3"
        handleClick={() => dispatch(addToCart(flowerItem))}
      />
    </div>
  )
}

export default Count
