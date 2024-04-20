import { FC } from 'react'

interface IAddCartBtnProps {
  text: string
  handleClick: () => void
}

const AddCartBtn: FC<IAddCartBtnProps> = ({ text, handleClick }) => {
  return (
    <button
      className="mb-2 bg-dark hover:bg-btnPressedDark transition-all py-3 px-7 text-white rounded-3xl"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default AddCartBtn
