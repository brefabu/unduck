import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import pages from './pages';

import './scss/index.css';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        {
          pages.map((page, index) => (
            <Route path={page.route} key={index} element={<Layout><page.component /></Layout>} />
          ))
        }
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

reportWebVitals();
