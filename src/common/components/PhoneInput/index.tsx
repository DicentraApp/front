import { useEffect, useState } from 'react'
import { BASE_URL } from '@/utils/constans'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Phone = () => {
  const [phone, setPhone] = useState('')
  const [title, setTitle] = useState('')
  const [isSend, setIsSend] = useState(false)
  const [numberOfOrder] = useState(Date.now())

  const handleChange = (value: string) => {
    setPhone(value)
  }

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const quick_order = {
        id: crypto.randomUUID(),
        phone,
        numberOfOrder,
      }

      const res = await fetch(BASE_URL + '/quick_order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quick_order),
      })

      if (res.status === 200) {
        setTitle('Thank you for the order!')
        setIsSend(true)
      }
    } catch (error) {
      setIsSend(false)
      setTitle('Some error! Please, try again')
    }
    setPhone('')
  }

  useEffect(() => {
    setTitle('Quick order')
    setIsSend(false)
  }, [])

  return (
    <div className="mt-7">
      <div className="font-medium mb-2">{title}</div>
      <div className="h-14">
        {isSend ? (
          <p>
            Your order number is{' '}
            <span className="font-medium">No. {numberOfOrder}</span>. Our
            manager will contact you soon to clarify the details of the order.
          </p>
        ) : (
          <form
            className="border border-gold border-solid rounded-full py-2 px-8 flex justify-between bg-transparent"
            onSubmit={onSubmit}
          >
            <PhoneInput
              country={'ua'}
              searchClass="border-0 focus:ring-transparent"
              inputClass="focus:ring-transparent"
              inputStyle={{
                fontSize: 18,
                background: 'transparent',
                border: 'none',
                outline: 'transparent',
                outlineOffset: 0,
                outlineColor: 'transparent',
              }}
              buttonStyle={{ border: 'none', background: 'transparent' }}
              value={phone}
              onChange={handleChange}
            />
            <button
              className="uppercase text-gold text-md font-medium hover:text-btnPressedGold transition-all"
              type="submit"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Phone
