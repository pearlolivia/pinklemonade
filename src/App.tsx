import { Suspense, useEffect } from 'react';
import Paths from './paths/Paths';
import LoadingSpinner from './components/Loading/LoadingSpinner';
import useImagePreloader from './hooks/useImagePreloader';
import imageList from './consts/images';

function App() {
  const { imagesPreloaded, preloadImages, error } = useImagePreloader();

  useEffect(() => {
    // preloadImages();
    console.log(imageList);
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="App">
        <Paths />
      </div>
    </Suspense>
  );
}

export default App;
