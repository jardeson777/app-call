import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../page/home';

// import { Container } from './styles';

export const RouterHome: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
