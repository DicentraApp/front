import { RootState } from '../store'

export const selectedFlowers = (state: RootState) => {
  const filteredList = state.flowers.list.filter((item) => item.bestsellers)
  return filteredList
}
