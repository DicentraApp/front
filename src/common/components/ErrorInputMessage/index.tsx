import { FC } from 'react'

interface ErrorInputMessageProps {
  message: string | undefined
}

const ErrorInputMessage: FC<ErrorInputMessageProps> = ({ message }) => {
  return (
    <div className="text-red-600 text-[13px] leading-4 font-light h-5 ml-4">
      {message}
    </div>
  )
}

export default ErrorInputMessage
