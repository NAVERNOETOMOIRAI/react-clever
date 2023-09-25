import { Configuration } from 'webpack';

const createBabelLoader = (): Configuration => {
  return {
    module: {
      rules: [
          {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.ts(x)?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
          },
      ],
    },
  };
};

export default createBabelLoader; 