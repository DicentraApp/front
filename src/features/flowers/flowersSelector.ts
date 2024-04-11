import { IFlowerItem } from '@/common/dto/getFlowersDto'
import { RootState } from '../store'

type IActionFlowersData = IFlowerItem[]

export const selectedFlowers = (state: RootState) => {
  const filteredList = state.flowers.list.filter((item) => item.bestsellers)
  return filteredList
}

export const selectedActionFlowers = (state: RootState) => {
  const actionFlowersData: IActionFlowersData = []
  state.flowers.list.forEach((elem) => {
    elem.flowers.filter((f) => f.isAction && actionFlowersData.push(f))
  })

  return actionFlowersData
}
