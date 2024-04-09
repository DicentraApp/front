import { FC } from 'react'

interface IPhone {
  phoneNumber: string
}

const Phone: FC<IPhone> = ({ phoneNumber }) => {
  return (
    <a
      className="font-ubuntu font-light text-base text-dark"
      href={`tel:${phoneNumber.replace(/[^\w\s]/gi, '')}`}
    >
      {phoneNumber}
    </a>
  )
}

export default Phone
