import { FC } from 'react'

interface LoginVsRegisterBottomProps {
  text: string
  btnText: string
  openModal: () => void
}

const LoginVsRegisterBottom: FC<LoginVsRegisterBottomProps> = ({
  text,
  openModal,
  btnText,
}) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-12 pt-8 border-t border-gold text-center">
      <p className="font-medium mb-1">{text}</p>
      <button
        className="uppercase text-gold text-xl font-ubuntu hover:text-btnPressedGold transition-all"
        onClick={openModal}
      >
        {btnText}
      </button>
    </div>
  )
}

export default LoginVsRegisterBottom
