import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';

// https://65e9cfcfc9bf92ae3d3a4e2e.mockapi.io/items
import { Home } from './pages/Home';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import(/*webpackChunkName:"Cart"*/ './pages/Cart'));
const FullPizza = React.lazy(() => import(/*webpackChunkName:"FullPizza"*/ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/*webpackChunkName:"NotFound"*/ './pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense
              fallback={
                <div className="container">
                  <h1>Идет загрузка корзины...</h1>
                </div>
              }>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense
              fallback={
                <div className="container">
                  <h1>Идет загрузка...</h1>
                </div>
              }>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="container">
                  <h1>Идет загрузка...</h1>
                </div>
              }>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
