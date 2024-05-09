import { ChangeEvent, FC } from 'react'

interface InputProps {
  value: string
  placeholder: string
  styles?: string
  type?: 'text' | 'password'
  change: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
  styles,
  value,
  type = 'text',
  change,
  placeholder,
}) => {
  return (
    <input
      className={`w-full font-roboto text-md bg-white py-3 px-5 border-none rounded-full focus:outline-gold ${styles}`}
      type={type}
      value={value}
      onChange={change}
      placeholder={placeholder}
    />
  )
}

export default Input
