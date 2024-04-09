import { IFlowersData } from '@/common/dto/getFlowersDto'
import { BASE_URL } from '@/utils/constans'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'flowersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFlowersApi: builder.query<IFlowersData, string>({
      query: () => '/flowers',
    }),
  }),
})

export const { useGetFlowersApiQuery } = apiSlice
