import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from 'constants/routes';
import ScrollToTop from 'shared/scrollRestoration';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from 'shared/errorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <RootRouter />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
