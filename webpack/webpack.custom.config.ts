import path from 'path';
import { merge } from 'webpack-merge';
import { Configuration } from 'webpack';
import createResolveModule from './createResolveModule';
import createCSSLoader from './createCSSLoader';
import createBabelLoader from './createBabelLoader';
import { ENV } from './types';
import createDevServer from './createDevServer';
import createDevelopmentConfig from './createDevelopmentConfig';
import createProductionConfig from './createProductionConfig';
import createImageLoader from './createImageLoader';


const createCommonConfiguration = (isProduction: boolean) => {
  const entryPoint = path.resolve(__dirname, '../src/app/appEntry.tsx');

  const commonConfiguration = merge([
    {
      entry: { index: entryPoint },
    },
    createResolveModule(),
    createBabelLoader(),
    createCSSLoader(),
    createImageLoader(),
  ]);

  return commonConfiguration;
};

const createWebpackConfig = (env: ENV): Configuration => {
  const { WEBPACK_SERVE, production } = env;
  if (!WEBPACK_SERVE) {
    return merge([createCommonConfiguration(!!production), createProductionConfig()]);
  } else {
    return merge([createCommonConfiguration(!!production),  createDevServer(), createDevelopmentConfig()]);
  }
};

export default createWebpackConfig;