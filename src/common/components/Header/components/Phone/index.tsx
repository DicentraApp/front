import { FC } from 'react'
import { setBackCallModal } from '@/features/modal/modalSlice'
import { useAppDispatch } from '@/hooks/hooks'

interface PhoneProps {
  phoneNumber: string
}

const Phone: FC<PhoneProps> = ({ phoneNumber }) => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col items-start">
      <a
        className="font-ubuntu font-light text-base text-dark"
        href={`tel:${phoneNumber.replace(/[^\w\s]/gi, '')}`}
      >
        {phoneNumber}
      </a>
      <button
        className="tracking-widest text-gold text-sm uppercase hover:text-btnPressedGold transition-all"
        onClick={() => dispatch(setBackCallModal(true))}
      >
        Back call
      </button>
    </div>
  )
}

export default Phone
