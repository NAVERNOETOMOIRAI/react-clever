import { combineReducers } from '@reduxjs/toolkit'
import { sidebarSlice } from '@/entities/sidebar/model/slice'
import { baseApi } from '@/shared/api/baseApi'

export const rootReducer = combineReducers({
  [sidebarSlice.name]: sidebarSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})