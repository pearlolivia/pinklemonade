import React, { Suspense } from 'react';
import Paths from './paths/Paths.tsx';
import LoadingSpinner from './components/Loading/LoadingSpinner.tsx';

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="App">
        <Paths />
      </div>
    </Suspense>
  );
}

export default App;
