/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import React from 'react';

import MainNavigation from '../Navigation/MainNavigation';

const BaseLayout = (props) => {
  const { children } = props;
  return (
    <>
      <MainNavigation />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className="container">
        {children}
      </div>
      <footer className="container">
        <hr />
        <p className="text-center no-print">
          &copy;
          <a href="https://tonyj.me">Tony Joseph</a>
        </p>
      </footer>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
