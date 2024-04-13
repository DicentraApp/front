import { useState } from 'react'
import { selectionFormData } from '../../data'
import QuickSelectionSelect from './QuickSelectionSelect'

const QuickSelectionForm = () => {
  const [data, setData] = useState('')

  const onOptionChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    setData(event.currentTarget.value)
  }

  console.log(data)

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
            selectData={selectionFormData.flowers}
            onChange={onOptionChangeHandler}
          />
          <QuickSelectionSelect
            selectData={selectionFormData.events}
            onChange={onOptionChangeHandler}
          />
          <QuickSelectionSelect
            selectData={selectionFormData.budget}
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
