export interface IFlowerItem {
  id: string
  name: string
  img: string
  price: string
  IsBestsellers: boolean
}

export interface IFlowerKind {
  id: number
  title: string
  bestsellers: boolean
  flowers: IFlowerItem[]
}

export type IFlowersData = IFlowerKind[]
