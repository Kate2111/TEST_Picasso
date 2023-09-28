import { IPostItem } from '@/modules/PostItem'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPostItem[], void>({
          query: () => ({
            url: '/posts',
          }),
        }),
        getPostById: builder.query<IPostItem, number>({
          query: (id: number) => ({
            url: `/posts/${id}`,
          }),
        }),
    }),
})

export const {useFetchAllPostsQuery, useGetPostByIdQuery} = postAPI