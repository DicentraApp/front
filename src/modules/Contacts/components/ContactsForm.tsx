import { BASE_URL } from '@/utils/constans'
import { zodResolver } from '@hookform/resolvers/zod'
import { Spinner } from 'flowbite-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const detailsShema = z.object({
  fullName: z.string().min(4).max(50),
  phone: z.string().min(10),
  comment: z.string(),
  email: z.string(),
})

type DetailsShemValues = z.infer<typeof detailsShema>

const ContactsForm = () => {
  const [status, setStatus] = useState('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DetailsShemValues>({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      comment: '',
    },
    resolver: zodResolver(detailsShema),
  })

  const onSubmit = handleSubmit(async (data) => {
    setStatus('loading')

    try {
      const newData = {
        id: crypto.randomUUID(),
        ...data,
      }
      const res = await fetch(BASE_URL + '/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      })

      if (res.status === 200) {
        setStatus('resolve')
      }
    } catch (error) {
      setStatus('error')
    }

    reset()
    setTimeout(() => setStatus('idle'), 3000)
  })

  return (
    <div className="w-8/12 mx-auto">
      <h5 className="text-2xl font-medium mb-3">Do you have any questions?</h5>
      <p>Fill out the client form below - and we will be happy to answer you</p>

      <form className="mt-8" onSubmit={onSubmit}>
        <div className="flex mb-4">
          <div className="w-6/12 mr-4">
            <input
              className="w-full rounded-full py-3 px-5 border-none font-roboto focus:ring-transparent"
              type="text"
              placeholder="First and last name"
              required
              {...register('fullName')}
            />
            <div className="text-xs ml-5 text-red-600 h-4 my-1">
              {errors.fullName?.message}
            </div>

            <input
              className="w-full rounded-full py-3 px-5 border-none font-roboto focus:ring-transparent"
              type="text"
              placeholder="Phone number"
              required
              {...register('phone', {
                onChange: (e) =>
                  (e.target.value = e.target.value.replace(/[^+\d]/g, '')),
              })}
            />
            <div className="text-xs ml-5 text-red-600 h-4 my-1">
              {errors.phone?.message}
            </div>

            <input
              className="w-full rounded-full py-3 px-5 border-none font-roboto focus:ring-transparent"
              type="text"
              placeholder="Email (optional)"
              {...register('email')}
            />
          </div>
          <div className="w-6/12">
            <textarea
              className="w-full h-48 py-4 px-5 border-none rounded-3xl font-roboto focus:ring-transparent resize-none"
              placeholder="Comment (optional)"
              {...register('comment')}
            />
          </div>
        </div>
        <button
          className="w-40 bg-dark text-xl text-white py-4 text-center rounded-full border-none hover:bg-btnPressedDark transition-all"
          type="submit"
        >
          {status === 'loading' ? (
            <Spinner size={'sm'} color={'#fff'} />
          ) : (
            'Send'
          )}
        </button>

        {status === 'resolve' && (
          <span className="ml-32">
            Thank you! Expect a call within an hour!
          </span>
        )}

        {status === 'error' && (
          <span className="text-red-600 ml-32">
            Something went wrong! Please, try again!
          </span>
        )}
      </form>
    </div>
  )
}

export default ContactsForm
