import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFlowersData, ITogetherWith } from '@/common/dto/getFlowersDto'
import { IReviewsData } from '@/common/dto/getReviewsDto'
import { BASE_URL } from '@/utils/constans'
import { IBlogData } from '@/common/dto/getBlogDto'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFlowersApi: builder.query<IFlowersData, void>({
      query: () => '/flowers',
    }),
    getReviewsApi: builder.query<IReviewsData, void>({
      query: () => '/reviews',
    }),
    getBlogApi: builder.query<IBlogData, void>({
      query: () => `/portal`,
    }),
    getChocolatesApi: builder.query<ITogetherWith[], void>({
      query: () => `/togetherWith`,
    }),
  }),
})

export const {
  useGetFlowersApiQuery,
  useGetReviewsApiQuery,
  useGetBlogApiQuery,
  useGetChocolatesApiQuery,
} = apiSlice
