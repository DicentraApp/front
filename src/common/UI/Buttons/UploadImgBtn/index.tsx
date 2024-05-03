import { FC, FormEvent } from 'react'
import { shortFileName } from '@/utils/helpers'
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from 'react-hook-form'

interface UploadImgBtnProps {
  subtitle: string
  fileName: string
  handleChange: (e: FormEvent<HTMLInputElement>) => void
  register: UseFormRegister<{
    name: string
    phone: string
    photo?: File
  }>
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<File>>
    | undefined
}

const UploadImgBtn: FC<UploadImgBtnProps> = ({
  subtitle,
  handleChange,
  fileName,
  register,
  error,
}) => {
  return (
    <>
      <div className="w-full mt-3 rounded-full relative">
        <input
          className="w-full absolute top-0 left-0 right-0 py-3 rounded-full bg-transparent border-none focus:ring-gold opacity-0 z-10"
          type="file"
          {...register('photo', {
            onChange: handleChange,
          })}
        />
        <div className="absolute w-full py-3 bg-gold top-0 left-0 right-0 rounded-full text-light text-md cursor-pointer flex justify-center">
          <img
            className={`${!fileName ? 'mr-2 block' : 'hidden'}`}
            src="images/icons/upload.svg"
            alt="upload"
          />
          {!fileName ? 'Upload a photo' : shortFileName(fileName)}
        </div>
      </div>

      {!error ? (
        <div className="text-md text-center mt-[70px]">{subtitle}</div>
      ) : (
        <div className="text-xs text-center ml-5 text-red-600 h-4 mb-1 mt-[70px]">
          {error.toString()}
        </div>
      )}
    </>
  )
}

export default UploadImgBtn
