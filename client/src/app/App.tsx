import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from '../pages/Main/NewsPage/NewsPage';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App(): React.JSX.Element {
  return (
    <BrowserRouter basename="/kaspTest">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NewsPage />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
