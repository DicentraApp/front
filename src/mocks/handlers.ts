import { http, HttpResponse } from 'msw'
import { portalData, flowersData, reviewsData } from './data'

export const handlers = [
  http.get('/flowers', () => {
    return HttpResponse.json(flowersData)
  }),
  http.get('/reviews', () => {
    return HttpResponse.json(reviewsData)
  }),
  http.get('/portal', () => {
    return HttpResponse.json(portalData)
  }),
  http.post('/order_by_photo/success', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json(body)
  }),
]
