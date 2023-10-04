import ReactDOM from 'react-dom/client';
import './root.scss'
import App from './index';
import { Provider } from 'react-redux';
import { appStore } from './store/appStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={appStore}>
    <App/>  
  </Provider>
);

if(module.hot){
  module.hot.accept('./index.tsx', () => {
    root.render(
          <App/>
    );
  })
}


