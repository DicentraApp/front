import { useState } from 'react'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import { BASE_URL } from '@/utils/constans'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CircularProgress } from '@mui/material'

const detailsShema = z.object({
  fullName: z.string().min(4).max(50),
  phone: z.string().min(10),
  comment: z.string(),
  email: z.string(),
})

enum State {
  idle = 'idle',
  loading = 'loading',
  error = 'error',
  resolve = 'resolve',
}

type DetailsShemValues = z.infer<typeof detailsShema>

const ContactsForm = () => {
  const [status, setStatus] = useState<State>(State.idle)
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
    setStatus(State.loading)

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
        setStatus(State.resolve)
      }
    } catch (error) {
      setStatus(State.error)
    }

    reset()
    setTimeout(() => setStatus(State.idle), 3000)
  })

  return (
    <div className="w-8/12 mx-auto">
      <h5 className="text-2xl font-medium mb-3">Do you have any questions?</h5>
      <p>Fill out the client form below - and we will be happy to answer you</p>

      <form className="mt-8" onSubmit={onSubmit}>
        <div className="flex mb-4">
          <div className="w-6/12 mr-4">
            <input
              className={`w-full rounded-full py-3 px-5 border-none font-roboto focus:outline-gold ${errors.fullName?.message ? 'focus:outline-red-600' : 'focus:outline-gold'}`}
              type="text"
              placeholder="First and last name"
              required
              {...register('fullName', {
                onChange: (e) =>
                  (e.target.value = e.target.value.replace(/[^a-zA-Z]+/g, '')),
              })}
            />
            <div className="text-xs ml-5 text-red-600 h-4 my-1">
              {errors.fullName?.message}
            </div>

            <input
              className={`w-full rounded-full py-3 px-5 border-none font-roboto ${errors.phone?.message ? 'focus:outline-red-600' : 'focus:outline-gold'}`}
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
              className="w-full rounded-full py-3 px-5 border-none font-roboto focus:outline-gold"
              type="text"
              placeholder="Email (optional)"
              {...register('email')}
            />
          </div>
          <div className="w-6/12">
            <textarea
              className="w-full h-48 py-4 px-5 border-none rounded-3xl font-roboto focus:outline-gold resize-none"
              placeholder="Comment (optional)"
              {...register('comment')}
            />
          </div>
        </div>
        <DarktBtn
          width="w-40 h-12"
          type="submit"
          text={
            status === State.loading ? (
              <CircularProgress color="inherit" size={16} />
            ) : (
              'Send'
            )
          }
        />

        {status === State.resolve && (
          <span className="ml-32">
            Thank you! Expect a call within an hour!
          </span>
        )}

        {status === State.error && (
          <span className="text-red-600 ml-32">
            Something went wrong! Please, try again!
          </span>
        )}
      </form>
    </div>
  )
}

export default ContactsForm
