import { Configuration } from 'webpack';
import path from 'path';
const createImageLoader = (): Configuration => {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, '../src/shared/assets')],
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true, 
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          exclude: [path.resolve(__dirname, '../src/shared/assets')],
          loader: 'url-loader',
          options: {
            esModule: false,
          },
        },
      ],
    },
  };
};

export default createImageLoader;
