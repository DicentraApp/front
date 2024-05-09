import { useState } from 'react'
import DarktBtn from '@/common/UI/Buttons/DarkBtn'
import Phone from '@/common/components/QuickOrderPhone/components/Phone'

const LoginForm = () => {
  const [phoneInput, setPhoneInput] = useState('')
  const [password, setPassword] = useState('')

  const isDisabledBtn = !phoneInput && !password
  return (
    <form>
      <div className="bg-white py-2 px-5 rounded-full focus:border focus:border-gold mb-6">
        <Phone
          value={phoneInput}
          changeValue={(value) => setPhoneInput(value)}
        />
      </div>
      <div className="relative mb-10">
        <input
          className="w-full font-roboto text-md bg-white py-3 pl-5 pr-10 rounded-full focus:outline-transparent"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <img
          className="absolute right-4 top-4 w-5 h-4 cursor-pointer"
          src="/images/icons/eye.svg"
          alt="password"
        />
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
