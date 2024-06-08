import { http, HttpResponse } from 'msw'
import { portalData, reviewsData, chocolatesData } from './data'

export const handlers = [
  http.get('/reviews', () => {
    return HttpResponse.json(reviewsData)
  }),
  http.get('/portal', () => {
    return HttpResponse.json(portalData)
  }),
  http.get('/togetherWith', () => {
    return HttpResponse.json(chocolatesData)
  }),
  http.post('/order_by_photo/success', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json(body)
  }),
  http.post('/contacts', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json(body)
  }),
  http.post('/quick_order', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json(body)
  }),
  http.post('/flowers/:id/reviews', async ({ request }) => {
    const body = await request.json()
    return HttpResponse.json(body)
  }),
]
