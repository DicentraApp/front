import { FC } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface PhoneProps {
  value: string
  changeValue: (value: string) => void
  onFocus?: () => void
}

const Phone: FC<PhoneProps> = ({ value, changeValue, onFocus }) => {
  return (
    <PhoneInput
      country={'ua'}
      searchClass="border-0 focus:outline-gold"
      inputClass="focus:outline-gold"
      inputStyle={{
        fontSize: 16,
        background: 'transparent',
        border: 'none',
        outline: '#b69b89',
      }}
      buttonStyle={{ border: 'none', background: 'transparent' }}
      value={value}
      onChange={changeValue}
      onFocus={onFocus}
    />
  )
}

export default Phone
