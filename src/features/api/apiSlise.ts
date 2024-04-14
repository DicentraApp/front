import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFlowersData } from '@/common/dto/getFlowersDto'
import { IReviewsData } from '@/common/dto/getReviewsDto'
import { BASE_URL } from '@/utils/constans'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFlowersApi: builder.query<IFlowersData, string>({
      query: () => '/flowers',
    }),
    getReviewsApi: builder.query<IReviewsData, void>({
      query: () => '/reviews',
    }),
  }),
})

export const { useGetFlowersApiQuery, useGetReviewsApiQuery } = apiSlice
