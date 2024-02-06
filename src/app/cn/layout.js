'use client';

import PropTypes from 'prop-types';

import MainLayout from 'src/layouts/mainCN';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <MainLayout disabledSpacing>{children}</MainLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
