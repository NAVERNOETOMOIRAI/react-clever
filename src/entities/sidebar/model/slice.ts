import {
    type PayloadAction,
    createSlice,
    createSelector,
  } from '@reduxjs/toolkit'
  
  const initialState = {
    itemsMap: {},
    version: 0,
  }
  
  
  export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
    },
  })
  

  
  export const {
  } = sidebarSlice.actions