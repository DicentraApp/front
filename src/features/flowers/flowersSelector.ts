import { IFlowerItem } from '@/common/dto/getFlowersDto'
import { RootState } from '../store'

type IActionFlowersData = IFlowerItem[]

export const selectedFlowers = (state: RootState) => {
  const filteredList = state.flowers.list.filter((item) => item.bestsellers)
  return filteredList
}

export const selectedActionFlowers = (state: RootState) => {
  const actionFlowersData: IActionFlowersData = []

  if (state.flowers.list) {
    state.flowers.list.forEach((item) => {
      item.flowers.forEach((f) => f.isAction && actionFlowersData.push(f))
    })

    return actionFlowersData
  } else return null
}

export const selectedTogetherWithFlowers = (state: RootState) => {
  const togetherWithData: IActionFlowersData = []

  if (state.flowers.list) {
    state.flowers.list.forEach((item) =>
      item.flowers.forEach((f) => f.togetherWith && togetherWithData.push(f))
    )
    return togetherWithData
  } else return null
}
