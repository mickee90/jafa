import { AppRegistry } from 'react-native';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

AppRegistry.registerComponent('Mobile', () => () => (
  <Provider store={store}>
    <App />
  </Provider>
));
