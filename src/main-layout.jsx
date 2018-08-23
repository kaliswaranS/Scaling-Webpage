import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const MainLayout = ({ children }) => (
  <div className="root__container">
    <Header />
    <main className="main">
      {children}
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
};

export default MainLayout;
