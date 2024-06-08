import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import FlowersItem from '@/common/components/FlowersItem'
import { flowersData } from './data'
import { getFlowers } from '@/features/flowers/flowersSlice'

const Bouquets = () => {
  const [tabInd, setTabInd] = useState(0)
  const [tabName, setTabName] = useState('')
  const [loading, setLoading] = useState(false)

  const { list } = useAppSelector((state) => state.flowers)
  const dispatch = useAppDispatch()

  const handleTabClick = (index: number, name: string) => {
    setLoading(true)
    setTabInd(index)
    setTabName(name)

    setTimeout(() => setLoading(false), 300)
  }

  useEffect(() => {
    dispatch(getFlowers(flowersData))
    setTabName('mix')
  }, [dispatch])

  return (
    <section className="pt-48 pb-40 bg-light">
      <div className="container">
        <ul className="flex justify-center mb-8 text-sm font-thin text-dark">
          <li className="pr-1 after:content-['/'] after:pl-1">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="" className={'font-medium'}>
              All bouquets
            </NavLink>
          </li>
        </ul>
        <h2 className="text-center text-4xl font-medium mb-9 text-dark">
          All bouquets
        </h2>

        <ul className="flex w-6/12 flex-row justify-between mx-auto mb-8">
          {list?.map((tab, ind) => {
            return (
              <li
                key={tab.id}
                className={`${tabInd === ind ? 'text-dark after:bg-dark' : 'text-gold after:bg-gold after:bg-btnPressedGold   hover:text-btnPressedGold'} cursor-pointer text-lg relative pb-1 after:content-[''] after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0`}
                onClick={() => handleTabClick(ind, tab.title)}
              >
                {tab.title}
              </li>
            )
          })}
        </ul>

        <div className={`flex flex-wrap w-10/12 mx-auto`}>
          {list?.map((elem) => {
            if (tabName.toLowerCase() === elem.title.toLowerCase()) {
              return elem.flowers.map((f) => (
                <FlowersItem key={f.id} data={f} isLoading={loading} />
              ))
            } else return null
          })}
        </div>
      </div>
    </section>
  )
}

export default Bouquets
