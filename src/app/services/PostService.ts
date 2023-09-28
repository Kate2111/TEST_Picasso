import { IPostItem } from '@/modules/PostItem'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPostItem[], number>({
          query: (page: number) => ({
            url: `/posts?_limit=10&${page}`,
            params: {
                _page: page
            }
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