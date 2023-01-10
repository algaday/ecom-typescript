import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type TFoods = {
  id: number
  title: string
  servings: number
  pricePerServing: number
  image: string
  vegetarian: boolean
  vegan: boolean
  glutenFree: boolean
  veryHealthy: boolean
  veryPopular: boolean
}

type Response = {
  recipes: TFoods[]
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spoonacular.com/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Response, string>({
      query: (number) =>
        `recipes/random?number=${number}&apiKey=dfdc7580ac914dc4b14bce6a17acb762`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApi
