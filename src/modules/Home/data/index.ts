import { ISliderData } from '@/common/dto/getSliderDto'

export const sliderData: ISliderData = [
  {
    id: crypto.randomUUID(),
    bg: 'bg-dark',
    img: 'slider-1',
  },
  {
    id: crypto.randomUUID(),
    bg: 'bg-green',
    img: 'slider-2',
  },
  {
    id: crypto.randomUUID(),
    bg: 'bg-bordo',
    img: 'slider-3',
  },
]

export const introDataFirst = [
  {
    id: crypto.randomUUID(),
    title: 'Service from the first second',
    text: 'We scrupulously control all stages of interaction with our clients, from the moment of placing an order to its full implementation.',
    imgPath: 'intro-1.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Wow assortment',
    text: 'And here we have no time for jokes either!))) 4676 types of cut flowers and about 100 types of potted plants.',
    imgPath: 'intro-2.jpg',
    marginToTop: '-mt-32',
  },
]

export const introDataSecond = [
  {
    id: crypto.randomUUID(),
    title: 'Warehouse-showroom',
    text: "An unusual phrase, isn't it? We agree, but this is also ____ square meters, where you can come/-arrive/-fly in any day of the week, choose the flower you like and drink a drop of delicious coffee.",
    imgPath: 'intro-3.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Florists are altruists',
    text: 'If you still don’t know who an altruist is, there’s a great excuse to google it ;) After all, our florists are always up to date with the latest trends in creating bouquets, always take into account your wishes and, in addition to the flower, they also wrap a piece of their soul in the packaging :)',
    imgPath: 'intro-4.jpg',
    marginToTop: 'mt-32',
  },
]
