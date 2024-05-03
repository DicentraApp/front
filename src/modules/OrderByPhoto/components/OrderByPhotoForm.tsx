import { shortFileName } from '@/utils/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const MAX_FILE_SIZE = 2000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/pdf',
  'image/JPEG',
  'image/PNG',
  'image/PDF',
]

const imageSchema = z
  .any()
  .optional()
  .refine(
    (file) =>
      file.length == 1
        ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type)
          ? true
          : false
        : true,
    '.jpeg, .pdf and .png files are accepted.'
  )
  .refine(
    (file) =>
      file.length == 1 ? (file[0]?.size <= MAX_FILE_SIZE ? true : false) : true,
    'Max file size allowed is 8MB.'
  )
  .refine((file) => file.length > 0, 'File is required')

const detailsShema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  photo: imageSchema,
})

type DetailsShemValues = z.infer<typeof detailsShema>

const OrderByPhotoForm = () => {
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState<File | undefined>()

  // const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DetailsShemValues>({
    defaultValues: {
      name: '',
      phone: '',
      photo: null,
    },
    resolver: zodResolver(detailsShema),
  })

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList
    }
    setFile(target.files[0])
    setFileName(target.files[0].name)
  }

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (typeof file === 'undefined') return

      const id = crypto.randomUUID()
      const formData = new FormData()
      formData.append('id', id)
      formData.append('name', data.name)
      formData.append('phone', data.phone)
      formData.append('photo', file)

      // const order = {
      //   id: crypto.randomUUID(),
      //   name: data.name,
      //   phone: data.phone,
      //   photo: file,
      // }

      const res = await fetch('http://localhost:5173/order_by_photo/success', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      })

      if (res.status === 200) {
        // navigate('success', { replace: true })
        console.log('succes')
      }
    } catch (error) {
      console.log(error)
    }
    reset()
    setFileName('')
  })

  return (
    <form className="w-[298px] mr-40" onSubmit={onSubmit} noValidate>
      <div className="text-xs ml-5 text-red-600 h-4 mb-1">
        {errors.name?.message}
      </div>
      <input
        className="w-full py-3 px-5 mb-2 rounded-full bg-white border-none focus:outline-gold"
        type="text"
        placeholder="Name"
        {...register('name', { minLength: 2, required: 'Name is required!' })}
      />

      <div className="text-xs ml-5 text-red-600 h-4 mb-1">
        {errors.phone?.message}
      </div>
      <input
        className="w-full py-3 px-5 rounded-full bg-white border-none focus:outline-gold"
        type="text"
        placeholder="Phone"
        {...register('phone', {
          minLength: 10,
          required: 'Phone number is required!',
          onChange: (e) =>
            (e.target.value = e.target.value.replace(/[^+\d]/g, '')),
        })}
      />
      <div className="text-center mt-6 text-xl text-dark font-medium">
        Photo of the bouquet
      </div>
      <div className="w-full mt-3 rounded-full relative">
        <input
          className="w-full absolute top-0 left-0 right-0 py-3 rounded-full bg-transparent border-none focus:outline-gold opacity-0 z-10"
          type="file"
          accept="image/png, image/pdf, image/jpg"
          {...register('photo', {
            required: 'Photo is required!',
            onChange: (e) => handleChange(e),
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

      {!errors.photo?.message ? (
        <div className="text-md text-center mt-[70px]">
          Upload files (PNG, JPEG, PDF)
        </div>
      ) : (
        <div className="text-xs text-center ml-5 text-red-600 h-4 mb-1 mt-[70px]">
          {errors.photo?.message.toString()}
        </div>
      )}

      <button
        className="mt-6 w-full py-3 text-center bg-dark text-white rounded-full text-md font-medium"
        type="submit"
      >
        Find out the cost
      </button>
    </form>
  )
}

export default OrderByPhotoForm
