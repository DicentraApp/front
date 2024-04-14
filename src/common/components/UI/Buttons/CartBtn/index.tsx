import { FC } from 'react'

interface IAddCartBtnProps {
  text: string
}

const AddCartBtn: FC<IAddCartBtnProps> = ({ text }) => {
  return (
    <button className="mb-2 bg-dark hover:bg-btnPressedDark transition-all py-3 px-7 text-white rounded-3xl">
      {text}
    </button>
  )
}

export default AddCartBtn
