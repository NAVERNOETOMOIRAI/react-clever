import path from 'path'
const createResolveModule = () => {
  return {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
      alias: {
         '@': path.resolve(__dirname, '../src'),
      },
      fallback: {
        "path": require.resolve("path-browserify") 
     }
    },
  };
};

export default createResolveModule;