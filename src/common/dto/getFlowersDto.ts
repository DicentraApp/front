export interface IReviewItem {
  id: string
  rating: number
  name: string
  comment: string
  createdAt: string
}

interface IFlowerChar {
  height: number
  width: number
  color: string[]
  compound: string[]
  events: string[]
}

export interface ITogetherWith {
  id: string
  name: string
  price: number
  actionPrice: number
  imgPath: string
}

export interface IFlowerItem {
  id: string
  article: number
  name: string
  img: string
  price: number
  inStock: boolean
  IsBestsellers?: boolean | undefined
  isAction?: boolean | undefined
  actionPrice?: number | undefined
  togetherWith?: ITogetherWith | undefined
  characteristic: IFlowerChar
  reviews: IReviewItem[] | undefined
  description: string
}

export interface IFlowerKind {
  id: number
  title: string
  bestsellers?: boolean | undefined
  flowers: IFlowerItem[]
}

export type IFlowersData = IFlowerKind[]
