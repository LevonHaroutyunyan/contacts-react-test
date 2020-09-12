import React, { Fragment } from 'react';
import Header from 'shared/layout/header';
import Footer from 'shared/layout/footer';

const withPage = ({ Component }) => {
  return () => {
    return (
      <Fragment>
        <Header />
        <Component />
        <Footer />
      </Fragment>
    );
  };
};

export default withPage;
