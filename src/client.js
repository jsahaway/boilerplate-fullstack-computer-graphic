import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './common/theme';
import { Provider } from 'react-redux';
import configureStore from './common/store';
import { DataProvider } from './app/components/DataContext';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <DataProvider
        data={typeof window != 'undefined' ? window.__INITIAL_DATA__ : {}}
      > */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </DataProvider> */}
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
  () => {
    // [ReHydratation](https://github.com/cssinjs/jss/blob/master/docs/ssr.md)
    const jssStyles = document.getElementById('jss-ssr');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
);

if (module.hot) {
  module.hot.accept();
}
