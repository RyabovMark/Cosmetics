import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface ProductType {
  name: string;
  price: number;
  category: string;
  gallery: Gallery[];
  about: About[];
  id: number;
}

export interface About {
  label: string;
  value: string;
  id: number;
}

export interface Gallery {
  url: string;
  id: number;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63b5d22158084a7af3a16bb7.mockapi.io",
  }),
  endpoints: (build) => ({
    createCall: build.mutation({
      query: (body) => ({
        url: 'calls',
        method: 'POST',
        body,
      }),
    }),
    getProductById: build.query<ProductType, string>({
      query: (id) => ({
        url: `cosmeticData`,
        params: {id},
      }),
      transformResponse: (response: ProductType[]) => response[0],
    }),
    getProductsByCategory: build.query<ProductType[], string>({
      query: (category) => ({
        url: "cosmeticData",
        params: {category},
      }),
    }),
    getFavoritesList: build.query<ProductType[], string>({
      query: () => ({
        url: 'favorites'
      })
    }),
    setFavorite: build.mutation({
      query: (body) => ({
        url: 'favorites',
        method: 'POST',
        body
      })
    }),
  }),
});

export const {
  useGetFavoritesListQuery,
  useSetFavoriteMutation,
  useCreateCallMutation,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
