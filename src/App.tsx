import React from 'react';
import './scss/app.scss';

import FullPizza from './pages/FullPizza';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import MainLayout from './layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
// https://65e9cfcfc9bf92ae3d3a4e2e.mockapi.io/items

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
