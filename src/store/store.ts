import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
//import PostSlice from './slice/PostSlice'
import { postAPI } from '@/services/PostService'

export const store = configureStore({
  reducer: {
    //post: PostSlice,
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()