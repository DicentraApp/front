import { useEffect, useState } from 'react'
import { z } from 'zod'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import Phone from '@/common/components/QuickOrderPhone/components/Phone'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { resetRegistrationError, setUsers } from '@/features/users/usersSlice'
import PasswordInput from '@/common/UI/Inputs/PasswordInput'

const detailsShema = z
  .object({
    name: z.string().min(2),
    email: z.union([z.literal(''), z.string().email('Email is not correct')]),
    password: z
      .string()
      .min(4, 'The password must be at least 4 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
        'The password must have 1 uppercase and 1 lowercase letters, 1 number and 1 special character'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type DetailsShemValues = z.infer<typeof detailsShema>

const RegistrationForm = () => {
  const { registrationError, registrationStatus } = useAppSelector(
    (state) => state.users
  )
  const dispatch = useAppDispatch()
  const [passwordType, setPasswordType] = useState('password')
  const [confirmType, setConfirmType] = useState('password')
  const [phoneInput, setPhoneInput] = useState('')
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('')

  const handleChangeValue = (value: string) => {
    setPhoneInput(value)

    if (value.length < 12) {
      setPhoneErrorMessage('Phone number too much short')
    } else {
      setPhoneErrorMessage('')
      dispatch(resetRegistrationError())
    }
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DetailsShemValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: zodResolver(detailsShema),
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const newUser = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        phone: phoneInput,
        ...data,
      }

      dispatch(setUsers(newUser))
    } catch (error) {
      console.error(error)
    }
  })

  useEffect(() => {
    if (registrationStatus === 'success') {
      reset()
      setPhoneInput('')
    }
  }, [registrationStatus, reset])

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="mb-4">
        <Phone
          value={phoneInput}
          changeValue={(value) => handleChangeValue(value)}
          borderColor={(phoneErrorMessage || registrationError) && '#dc2626'}
        />
        <ErrorInputMessage message={phoneErrorMessage || registrationError} />
      </div>

      <div className="mb-4">
        <input
          className={`w-full font-roboto text-md bg-white py-3 px-5 rounded-full border border-[3px] focus:outline-gold ${
            errors.name?.message
              ? 'border-red-600 focus:outline-red-600'
              : 'focus:outline-gold border-transparent'
          }`}
          placeholder="Name"
          {...register('name')}
        />
        <ErrorInputMessage message={errors.name?.message} />
      </div>

      <div className="mb-4">
        <input
          className={`w-full font-roboto text-md bg-white py-3 px-5 rounded-full border border-[3px] focus:outline-gold ${
            errors.email?.message
              ? 'border-red-600 focus:outline-red-600'
              : 'focus:outline-gold border-transparent'
          }`}
          type="email"
          {...register('email')}
          placeholder="Email (optional)"
        />
        <ErrorInputMessage message={errors.email?.message} />
      </div>

      <div className="mb-4">
        <PasswordInput
          styles={`border border-[3px] ${
            errors.password?.message
              ? 'border-red-600 focus:outline-red-600'
              : 'focus:outline-gold border-transparent'
          }`}
          type={passwordType}
          placeholder="Password"
          setPasswordType={setPasswordType}
          {...register('password')}
        />
        <ErrorInputMessage message={errors.password?.message} />
      </div>

      <div className="mb-5">
        <PasswordInput
          styles={`border border-[3px] ${
            errors.confirmPassword?.message
              ? 'border-red-600 focus:outline-red-600'
              : 'focus:outline-gold border-transparent'
          }`}
          type={confirmType}
          placeholder="Confirm password"
          setPasswordType={setConfirmType}
          {...register('confirmPassword')}
        />
        <ErrorInputMessage message={errors.confirmPassword?.message} />
      </div>

      <DarktBtn
        text="Register"
        width="w-full disabled:opacity-75 disabled:bg-dark"
        type="submit"
        disabled={phoneInput.length < 12}
      />
    </form>
  )
}

export default RegistrationForm
