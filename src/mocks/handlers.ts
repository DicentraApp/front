import { http, HttpResponse } from 'msw'
import { flowersData, reviewsData } from './data'

export const handlers = [
  http.get('/flowers', () => {
    return HttpResponse.json(flowersData)
  }),
  http.get('/reviews', () => {
    return HttpResponse.json(reviewsData)
  }),
]
