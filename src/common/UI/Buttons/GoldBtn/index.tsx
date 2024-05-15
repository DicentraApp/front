import { FC } from 'react'

interface GoldBtnProps {
  styles: string
  text: string
  type?: 'submit' | undefined
  handleClick?: () => void
}

const GoldBtn: FC<GoldBtnProps> = ({ handleClick, text, styles, type }) => {
  return (
    <button
      className={`${styles} text-center bg-gold text-white font-medium rounded-full hover:bg-btnPressedGold transition-all`}
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default GoldBtn
