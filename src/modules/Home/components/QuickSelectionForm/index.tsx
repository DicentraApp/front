import { FC, useState } from 'react'
import { selectionFormData } from '../../data'
import QuickSelectionSelect from './QuickSelectionSelect'

interface IQuickSelectionForm {
  data: {
    flowers: {
      title: string
      data: string[]
    }
    events: {
      title: string
      data: string[]
    }
    budget: {
      title: string
      data: string[]
    }
  }
}

const QuickSelectionForm: FC<IQuickSelectionForm> = ({ data }) => {
  const [formData, setFormData] = useState('')

  const onOptionChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setFormData(event.currentTarget.value)
    console.log(formData)
  }

  return (
    <section className="bg-selection-form bg-no-repeat bg-cover bg-left-top w-full text-light text-center py-24">
      <div className="container">
        <h2 className="text-4xl font-medium">
          A beautiful bouquet is the best gift!
        </h2>
        <p className="text-lg font-light mt-4">
          Quick selection (we will select the ideal option for you)
        </p>

        <form className="mt-11 w-10/12 flex justify-between mx-auto">
          <QuickSelectionSelect
            selectData={data.flowers}
            onChange={onOptionChangeHandler}
          />
          <QuickSelectionSelect
            selectData={data.events}
            onChange={onOptionChangeHandler}
          />
          <QuickSelectionSelect
            selectData={data.budget}
            onChange={onOptionChangeHandler}
          />

          <button
            className="py-5 px-16 bg-gold text-white rounded-xl text-base font-semibold font-ubuntu"
            type="submit"
          >
            Select
          </button>
        </form>
      </div>
    </section>
  )
}

export default QuickSelectionForm
