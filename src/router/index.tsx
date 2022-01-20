import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../page/home';
import { Meet } from '../page/Meet';

export const RouterHome: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/meet" element={<Meet />} />
  </Routes>
);
