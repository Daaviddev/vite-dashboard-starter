import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import AppRoutes from '@common/routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
