const imagesEcgbert1 = import.meta.glob('../assets/images/ecgbert-may22/*', { eager: true });
const imagesEcgbert2 = import.meta.glob('../assets/images/ecgbert-oct22/*', { eager: true });
const imagesEcgbert3 = import.meta.glob('../assets/images/ecgbert-apr23/*', { eager: true });
const imagesForge = import.meta.glob('../assets/images/forge/*', { eager: true });
const imagesLogos = import.meta.glob('../assets/images/logo/*', { eager: true });
const imagesMisc = import.meta.glob('../assets/images/*', { eager: true });

// const imageList = Object.keys(images);

const getMergedList = () => {
    const importList = [
        imagesEcgbert1,
        imagesEcgbert2,
        imagesEcgbert3,
        imagesForge,
        imagesLogos,
        imagesMisc
    ];
};

export default imagesMisc;