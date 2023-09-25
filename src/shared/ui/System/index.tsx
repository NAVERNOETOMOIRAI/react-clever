import React from 'react';
import { importRemote } from '@module-federation/utilities';
import {useLoaderData,
} from "react-router-dom";

export const System = () => {
  const { url, scope, module }:any = useLoaderData();

  if ( !url || !scope || !module) {
    return <h2>No system specified</h2>;
  }


  return (
    <React.Suspense fallback="Loading System">
      <div>123123</div>
    </React.Suspense>
  );
}

export default System;
