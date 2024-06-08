import { useEffect, useState } from 'react'
import { BASE_URL } from '@/utils/constans'
import Phone from './components/Phone'

const QuickOrderPhone = () => {
  const [phone, setPhone] = useState('')
  const [title, setTitle] = useState('')
  const [isSend, setIsSend] = useState(false)
  const [numberOfOrder] = useState(Date.now())

  const handleChangePhone = (value: string) => {
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
            className="border bg-white border-gold border-solid rounded-full pr-8 flex justify-between bg-transparent"
            onSubmit={onSubmit}
          >
            <Phone
              value={phone}
              changeValue={handleChangePhone}
              borderColor="transparent"
            />
            <button
              className="uppercase text-gold text-md font-medium hover:text-btnPressedGold transition-all"
              type="submit"
              disabled={phone.length < 12}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default QuickOrderPhone
