import React from 'react';

import './App.css';
import BaseLayout from './components/layouts/BaseLayout';
import Calculate from './pages/Calculate';

function App() {
  return (
    <BaseLayout>
      <p>&nbsp;</p>
      <Calculate />
    </BaseLayout>
  );
}

export default App;
