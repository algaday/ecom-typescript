import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://randomuser.me/api/',
  }),
  endpoints: (builder) => ({
    getFeedbackApi: builder.query({
      query: (number) => `?results=${number}`,
    }),
  }),
})

export const { useGetFeedbackApiQuery } = feedbackApi
