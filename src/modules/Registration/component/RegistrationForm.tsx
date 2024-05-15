import { useState } from 'react'
import { z } from 'zod'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import Phone from '@/common/components/QuickOrderPhone/components/Phone'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import { BASE_URL } from '@/utils/constans'
import { setRegistrationStatus } from '@/features/modal/modalSlice'
import { useAppDispatch } from '@/hooks/hooks'
import { setUsers } from '@/features/users/usersSlice'
import PasswordIcon from '@/common/UI/Icons/PasswordIcon'

const detailsShema = z
  .object({
    name: z.string().min(2),
    email: z.string().email('Email is not correct'),
    password: z
      .string()
      .min(4, 'The password must be at least 4 characters long')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'The password must have 1 uppercase and 1 lowercase letters, 1 number and 1 special character'
      ),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type DetailsShemValues = z.infer<typeof detailsShema>

const RegistrationForm = () => {
  const dispatch = useAppDispatch()
  const [phoneInput, setPhoneInput] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const [confirmType, setConfirmType] = useState('password')

  const imgPaswordPath =
    passwordType === 'password' ? 'eye-slash.svg' : 'eye.svg'
  const imgConfirmPaswordPath =
    confirmType === 'password' ? 'eye-slash.svg' : 'eye.svg'
  const phoneErorrMessage =
    (!phoneInput ? 'Phone is required' : '') || phoneInput.length < 12
      ? 'Phone number too much short'
      : ''

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
    resolver: zodResolver(detailsShema),
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const user = {
        id: crypto.randomUUID(),
        name: data.name,
        phone: phoneInput,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        createdAt: new Date(),
      }

      const res = await fetch(BASE_URL + '/registration', {
        method: 'POST',
        body: JSON.stringify(user),
      })

      if (res.status === 200) {
        dispatch(setUsers(user))
        dispatch(setRegistrationStatus('success'))
      }
    } catch (error) {
      dispatch(setRegistrationStatus('error'))
    }

    reset()
    setPhoneInput('')
  })
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mb-4">
        <div className="bg-white py-2 px-5 rounded-full focus:border focus:border-gold">
          <Phone
            value={phoneInput}
            changeValue={(value) => setPhoneInput(value)}
          />
        </div>
        <ErrorInputMessage message={phoneErorrMessage} />
      </div>

      <div className="mb-4">
        <input
          className="w-full font-roboto text-md bg-white py-3 px-5 rounded-full focus:outline-gold"
          placeholder="Name"
          {...register('name')}
        />
        <ErrorInputMessage message={errors.name?.message} />
      </div>

      <div className="mb-4">
        <input
          className="w-full font-roboto text-md bg-white py-3 px-5 rounded-full focus:outline-gold"
          type="email"
          {...register('email')}
          placeholder="Email"
        />
        <ErrorInputMessage message={errors.email?.message} />
      </div>

      <div className="mb-4">
        <div className="relative">
          <input
            className="w-full font-roboto text-md bg-white py-3 pl-5 pr-10 rounded-full focus:outline-gold"
            type={passwordType}
            placeholder="Password"
            {...register('password')}
          />
          <PasswordIcon
            imgPath={imgPaswordPath}
            setType={() =>
              setPasswordType(passwordType === 'password' ? 'text' : 'password')
            }
          />
        </div>
        <ErrorInputMessage message={errors.password?.message} />
      </div>

      <div className="mb-5">
        <div className="relative">
          <input
            className="w-full font-roboto text-md bg-white py-3 pl-5 pr-10 rounded-full focus:outline-gold"
            type={confirmType}
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
          <PasswordIcon
            imgPath={imgConfirmPaswordPath}
            setType={() =>
              setConfirmType(confirmType === 'password' ? 'text' : 'password')
            }
          />
        </div>
        <ErrorInputMessage message={errors.confirmPassword?.message} />
      </div>

      <DarktBtn
        text="Register"
        width="w-full disabled:opacity-75 disabled:bg-dark"
        type="submit"
      />
    </form>
  )
}

export default RegistrationForm
