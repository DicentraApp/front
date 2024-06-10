import { setBackCallModal } from '@/features/modal/modalSlice'
import { useAppDispatch } from '@/hooks/hooks'
import { FC } from 'react'

interface IPhone {
  phoneNumber: string
}

const Phone: FC<IPhone> = ({ phoneNumber }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col">
      <a
        className="font-ubuntu font-light text-base text-dark"
        href={`tel:${phoneNumber.replace(/[^\w\s]/gi, '')}`}
      >
        {phoneNumber}
      </a>
      <button
        className="text-gold text-center -mt-1 hover:text-btnPressedGold transition-all"
        onClick={() => dispatch(setBackCallModal(true))}
      >
        Back call
      </button>
    </div>
  )
}

export default Phone
