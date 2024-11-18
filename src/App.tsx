import { Suspense } from 'react';
import Paths from './paths/Paths';
import LoadingSpinner from './components/Loading/LoadingSpinner';

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
