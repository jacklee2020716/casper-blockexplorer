import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="container m-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
