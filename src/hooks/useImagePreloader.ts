import { useState } from 'react';

const useImagePreloader = () => {
    const [imagesPreloaded, setImagesPreloaded] = useState(false);
    const [error, setError] = useState(false);

    const preloadImage = (src: string) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => {
                console.error('Failed to load image: ', src);
            };

            img.src = src.replace('/public', '');
        });
    }

    const preloadImages = async (imageList: string[]) => {
        setError(false);
        const imagesPromiseList = [];

        if (imageList) {
            for (const image of imageList) {
                imagesPromiseList.push(preloadImage(image));
            }
        }
        
        if (imagesPromiseList.length > 0) {
            await Promise.all(imagesPromiseList)
                .then(() => {
                    setImagesPreloaded(true);
                })
                .catch((err) => {
                    setError(true);
                    console.error(error, `Cannot load an image. ${err}`);
                });
        }
    };
    
    return { imagesPreloaded, preloadImages, error };
}

export default useImagePreloader;