import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DashboardLayout from '@layout/ContentLayout/ContentLayout';
import MainLayout from '@layout/MainLayout/MainLayout';
import DashboardHome from '@pages/DashboardHome';
import DashboardSettings from '@pages/DashboardSettings';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
