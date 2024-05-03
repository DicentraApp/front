import { useAppSelector } from '@/hooks/hooks'

const Price = () => {
  const {
    flowerItem: { actionPrice, price },
    priceWithCount,
  } = useAppSelector((state) => state.flowers)

  return (
    <div className="mt-6 text-3xl">
      Price:
      {!actionPrice ? (
        <span className={'text-dark ml-4 font-semibold'}>
          {priceWithCount} $
        </span>
      ) : (
        <>
          <span className={'mr-3 text-gold line-through ml-4 font-semibold'}>
            {price}
          </span>
          <span className="font-semibold">{priceWithCount} $</span>{' '}
        </>
      )}
    </div>
  )
}

export default Price
