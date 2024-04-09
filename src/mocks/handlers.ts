import { http, HttpResponse } from 'msw'
import { flowersData } from './data'

export const handlers = [
  http.get('/flowers', () => {
    return HttpResponse.json(flowersData)
  }),
]
