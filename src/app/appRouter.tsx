import {  createBrowserRouter } from 'react-router-dom'
import { layoutWithSidebar } from './layouts/layoutWithSidebar'
import { MainPage } from '@/pages/main'
import { SidebarItem } from '@/entities/sidebar/model/types'
import { ReactPage } from '@/pages/react'
import { Iframe } from '@/pages/iframe'

const getSibedarRouter = (sidebarItem: SidebarItem) => {
  const {url, scope, module, path} = sidebarItem
  if(sidebarItem.type === 'Iframe'){
    return {
        path,
        element: <Iframe/>,
        loader:   () => {
          return {
          url,
        }
      }
    }
  }
  return  {
    path,
    element: <ReactPage/>,
    errorElement: <div>error</div>,
    loader:   () => {
        return {
        url,
        scope,
        module
      }
  }
  }
}
const transformSidebarData = (data: SidebarItem):any => {
  if(!data.items.length) return getSibedarRouter(data)
  return data.items.map((item) => transformSidebarData(item))
}
export const appRouter = (props:SidebarItem[]) =>{
  const transformData = props.map((item) => transformSidebarData(item)).flat(3);
  return createBrowserRouter([
    {
      element: layoutWithSidebar,
      errorElement: <div>error</div>,
      loader:  () => {
        return props
      },
      children: [
        {
          path: '/',
            element: <MainPage/>,
        },
        ...transformData
      ],
    },
  ])}