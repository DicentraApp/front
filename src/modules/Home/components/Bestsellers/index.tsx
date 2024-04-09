import { useEffect, useState } from 'react'
import { Spinner } from 'flowbite-react'
import BestsellersItem from './BestsellersItem'
import { useAppDispatch, useAppSelector } from '@/common/hooks/hooks'
import { getFlowers, setFlowers } from '@/features/flowers/flowersSlice'
import { useSelector } from 'react-redux'
import { selectedFlowers } from '@/features/flowers/flowersSelector'
import { IFlowerItem } from '@/common/dto/getFlowersDto'

const Bestsellers = () => {
  const filteredList = useSelector(selectedFlowers)
  const { isLoading, flowers } = useAppSelector((state) => state.flowers)
  const dispatch = useAppDispatch()
  const [tabInd, setTabInd] = useState(0)

  const handleTabClick = (index: number, flow: IFlowerItem[]) => {
    setTabInd(index)
    dispatch(setFlowers(flow))
  }

  useEffect(() => {
    dispatch(getFlowers())
  }, [])

  if (isLoading) {
    return (
      <div className="text-center">
        {' '}
        <Spinner color="info" size="md" />
      </div>
    )
  }

  return (
    <section className="bg-light py-16 mb-24">
      <div className="container">
        <h2 className="text-4xl mb-8 text-center font-medium">
          Our bestsellers
        </h2>

        <ul className="flex w-96 flex-row justify-between mx-auto mb-8">
          {filteredList?.map((tab, ind) => {
            return (
              <li
                key={tab.id}
                className={`${tabInd === ind ? 'text-dark after:bg-dark' : 'text-gold after:bg-gold after:bg-btnPressedGold   hover:text-btnPressedGold'} cursor-pointer text-lg relative pb-1 after:content-[''] after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0`}
                onClick={() => handleTabClick(ind, tab.flowers)}
              >
                {tab.title}
              </li>
            )
          })}
        </ul>
        <div className="flex justify-between">
          {flowers?.map((elem) => {
            if (elem.IsBestsellers) {
              return <BestsellersItem key={elem.id} {...elem} />
            } else return null
          })}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
