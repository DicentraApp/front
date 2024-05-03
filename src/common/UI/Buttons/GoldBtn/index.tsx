import { FC } from 'react'

interface GoldBtnProps {
  styles: string
  text: string
  handleClick: () => void
}

const GoldBtn: FC<GoldBtnProps> = ({ handleClick, text, styles }) => {
  return (
    <button
      className={`${styles} text-center bg-gold text-white font-medium py-4 rounded-full hover:bg-btnPressedGold transition-all`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default GoldBtn
