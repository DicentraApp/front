import { ChangeEventHandler, FC } from 'react'

interface IQuickSelectionSelect {
  selectData: {
    title: string
    data: string[]
  }
  onChange: ChangeEventHandler<HTMLSelectElement>
}

const QuickSelectionSelect: FC<IQuickSelectionSelect> = ({
  selectData,
  onChange,
}) => {
  return (
    <select
      className="focus:ring-transparent focus:outline-none text-textGrey font-light p-5 w-[270px] border-none text-base font-ubuntu rounded-xl"
      name="flowers"
      onChange={onChange}
    >
      <option>{selectData.title}</option>
      {selectData.data.map((option, i) => (
        <option key={option + i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default QuickSelectionSelect
