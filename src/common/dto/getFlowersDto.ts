export interface IFlowerItem {
  id: string
  name: string
  img: string
  price: number
  IsBestsellers?: boolean | undefined
  isAction?: boolean | undefined
  actionPrice?: number | undefined
}

export interface IFlowerKind {
  id: number
  title: string
  bestsellers?: boolean | undefined
  flowers: IFlowerItem[]
}

export type IFlowersData = IFlowerKind[]
