import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import {Loader} from '@alfalab/core-components/loader'
import { sleep } from '@/shared/lib';
import { appRouter } from './appRouter';
import './root.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Loader  />
  </React.StrictMode>
);
sleep(1000).then(() => {
    root.render(
        <React.StrictMode>
          <RouterProvider router={appRouter()}/>
        </React.StrictMode>
      );
})    

if(module.hot){
  module.hot.accept('./layouts/layoutWithSidebar.tsx', () => {
    root.render(
      <React.StrictMode>
        <RouterProvider router={appRouter()}/>
      </React.StrictMode>
    );
  })
}

