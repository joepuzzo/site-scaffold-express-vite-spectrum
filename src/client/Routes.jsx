import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

// Components
import { Home } from './pages/Home';

// Routes ------------------------------------------------------------
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/a" element={<Home />} />
      {/* <Route path="unauthorized" element={<NotAuthorized />} />
      <Route path="*" element={<NotFound />} /> */}
    </RouterRoutes>
  );
};
