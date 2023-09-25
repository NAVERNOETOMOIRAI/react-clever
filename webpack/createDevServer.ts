import path from 'path';
import 'webpack-dev-server';

const createDevServer = (): any => {
  return {
    devServer: {
      port:  3000,
      host: '127.0.0.1',
      static: {
        directory: path.join(__dirname, '/public'),
        publicPath: '/',
      },
      client: {
        overlay: {
          errors: true,
          warnings: false,
          runtimeErrors: false,
        },
      },
      historyApiFallback: true,
      hot: true,
      proxy: {
        
      },
    },
  };
};

export default createDevServer;