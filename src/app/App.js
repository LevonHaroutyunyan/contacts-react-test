import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from 'constants/routes';
import ScrollToTop from 'shared/scrollRestoration';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from 'shared/errorBoundary';
import { authChecker } from 'utils/authChecker';

const App = () => {
  const [authorized, setAuthorized] = useState()
  useEffect(() => {
    setAuthorized(localStorage.getItem('authToken'))
  }, [])
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <RootRouter authorized={true}/>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
