import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules';
import { Provider } from 'react-redux'; // react - store 연동 컴포넌트

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


