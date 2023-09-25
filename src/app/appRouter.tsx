import { type ReactElement } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { layoutWithSidebar } from './layouts/layoutWithSidebar'
import { MainPage } from '@/pages/main'
import { System } from '@/shared/ui'

export const appRouter = () =>
  createBrowserRouter([
    {
      element: layoutWithSidebar,
      errorElement: <div>error</div>,
      loader:  () => {
        return []
      },
      children: [
        {
          path: '/',
            element: <MainPage/>,
        },
        {
            path: '/system/*',
            element: <System />,
            errorElement: <div>error</div>,
            loader:   () => {
                return {
                url: 'http://localhost:3002',
                scope: 'app2',
                module: './Widget' }
              },
          },
      ],
    },
  ])