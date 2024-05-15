import { FormEvent, useEffect, useState } from 'react'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import Phone from '@/common/components/QuickOrderPhone/components/Phone'
import PasswordIcon from '@/common/UI/Icons/PasswordIcon'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { setLoginModal } from '@/features/modal/modalSlice'
import ErrorInputMessage from '@/common/UI/Inputs/ErrorInputMessage'
import { resetLoginError, loginUser } from '@/features/users/usersSlice'

const LoginForm = () => {
  const { loginError } = useAppSelector((state) => state.users)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [phoneInput, setPhoneInput] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')

  const imgPaswordPath =
    passwordType === 'password' ? 'eye-slash.svg' : 'eye.svg'

  const isDisabledBtn = !phoneInput && !password

  const resetInputs = () => {
    setPhoneInput('')
    setPassword('')
  }

  const cleanLoginError = () => {
    dispatch(resetLoginError())
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const user = {
        phone: phoneInput,
        password,
      }

      dispatch(loginUser(user))

      if (!loginError) {
        navigate('/')
        dispatch(setLoginModal(false))
        resetInputs()
      }
    } catch (error) {
      console.log(error)
      resetInputs()
    }
  }

  useEffect(() => {
    dispatch(resetLoginError())
  }, [dispatch])

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white py-2 px-5 rounded-full focus:border focus:border-gold mb-6">
        <Phone
          value={phoneInput}
          changeValue={(value) => setPhoneInput(value)}
          onFocus={cleanLoginError}
        />
      </div>
      <div className="relative mb-4">
        <input
          className="w-full font-roboto text-md bg-white py-3 pl-5 pr-10 rounded-full focus:outline-transparent"
          type={passwordType}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={cleanLoginError}
          placeholder="Password"
        />
        <PasswordIcon
          imgPath={imgPaswordPath}
          setType={() =>
            setPasswordType(passwordType === 'password' ? 'text' : 'password')
          }
        />
      </div>
      <div className="mb-4 text-center h-6 -ml-5">
        <ErrorInputMessage message={loginError} />
      </div>
      <DarktBtn
        text="Sign in"
        width="w-full disabled:opacity-75 disabled:bg-dark"
        type="submit"
        disabled={isDisabledBtn}
      />
    </form>
  )
}

export default LoginForm
